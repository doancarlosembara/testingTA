<?php

namespace App\Http\Controllers;

use App\Models\Branch;
use App\Models\Employee;
use App\Services\BranchServices;
use App\Services\ValidationServices;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BranchController extends Controller
{
    protected BranchServices $branchServices;
    protected ValidationServices $validationServices;
    public function __construct()
    {
        $this->branchServices = new BranchServices;
        $this->validationServices = new ValidationServices;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('Branch/Branches', [
            'branches' => Branch::when($request->term, function ($query, $term) {
                $query->where('id', 'ILIKE', '%' . $term . '%')
                    ->orWhere('name', 'ILIKE', '%' . $term . '%')
                    ->orWhere('phone', 'ILIKE', '%' . $term . '%')
                    ->orWhere('email', 'ILIKE', '%' . $term . '%')
                    ->orWhere('address', 'ILIKE', '%' . $term . '%');
            })
                ->select(['id', 'name', 'phone', 'email', 'address'])
                ->withCount('employees')
                ->orderBy('id')
                ->paginate(config('constants.data.pagination_count')),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Branch/BranchCreate', [
            'employees' => Employee::select(['id', 'name'])->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $res = $this->validationServices->validateBranchCreationDetails($request);
        return $this->branchServices->createBranch($res);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id, Request $request)
    {
        $branch = Branch::withCount('employees')->findOrFail($id);
    
        // Prepare the search term
        $searchTerm = '%' . strtolower(normalizeArabic($request->term)) . '%';
    
        // Query the employees with case-insensitive search
        $employees = $branch->employees()->where(function ($query) use ($searchTerm) {
            $query->whereRaw('LOWER(employees.normalized_name) LIKE ?', [$searchTerm])
                ->orWhereRaw('LOWER(employees.email) LIKE ?', [$searchTerm])
                ->orWhereRaw('LOWER(employees.id) LIKE ?', [$searchTerm])
                ->orWhereRaw('LOWER(employees.phone) LIKE ?', [$searchTerm])
                ->orWhereRaw('LOWER(employees.national_id) LIKE ?', [$searchTerm]);
        })
            ->orderBy('employees.id')
            ->paginate(config('constants.data.pagination_count'), ['employees.id', 'employees.name', 'employees.phone', 'employees.email', 'employees.national_id']);
    
        // Render the view with the branch and employees data
        return Inertia::render('Branch/BranchView', [
            'branch' => $branch,
            'employees' => $employees,
            'manager' => $branch->manager()->exists() ? $branch->manager()->select(['employees.id', 'employees.name'])->first() : '',
        ]);
    }
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Branch/BranchEdit', [
            'branch' => Branch::with('manager')->withCount('employees')->findOrFail($id),
            'employees' => Employee::select(['id', 'name'])->get()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $res = $this->validationServices->validateBranchUpdateDetails($request, $id);
        return $this->branchServices->updateBranch($res, $id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Branch::findOrFail($id)->delete();
        return to_route('branches.index');
    }
}
