<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, router } from "@inertiajs/vue3";
import EmployeeTabs from "@/Components/Tabs/EmployeeTabs.vue";
import SearchBar from "@/Components/SearchBar.vue";
import FlexButton from "@/Components/FlexButton.vue";
import { ref, watch } from "vue";
import debounce from "lodash.debounce";
import Table from "@/Components/Table/Table.vue";
import TableHead from "@/Components/Table/TableHead.vue";
import TableBody from "@/Components/Table/TableBody.vue";
import TableBodyHeader from "@/Components/Table/TableBodyHeader.vue";
import TableBodyAction from "@/Components/Table/TableBodyAction.vue";
import TableRow from "@/Components/Table/TableRow.vue";
import Card from "@/Components/Card.vue";
import AddUserIcon from "@/Components/Icons/AddUserIcon.vue";

const term = ref("");
const sort = ref("id");
const sort_dir = ref(true);
const search = debounce(() => {
    router.visit(
        route("employees.index", {
            term: term.value,
            sort: sort.value,
            sort_dir: sort_dir.value,
        }),
        { preserveState: true, preserveScroll: true }
    );
}, 400);
watch(term, search);
watch(sort, search);
watch(sort_dir, search);

const props = defineProps({
    employees: Object,
});
</script>

<template>
    <Head :title="__('Employees')" />
    <AuthenticatedLayout>
        <template #tabs>
            <EmployeeTabs />
        </template>
        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Card class="!mt-0">
                    <h1 class="card-header !mb-4">{{ __("Employees") }}</h1>
                    <SearchBar
                        v-model="term"
                        placeholder="Search Employees..."
                    />
                    <div class="mt-4">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableBodyHeader>{{
                                        __("ID")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Nama")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("NIK")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Email")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("NPWP")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("No Telepon")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Jenis Kelamin")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Tempat Lahir")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Tanggal Lahir")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Tanggal Perekrutan")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Agama")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Alamat")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("RT")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("RW")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Kelurahan")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Kecamatan")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Kabupaten/Kota")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Foto Profil")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Foto KTP")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Foto BPJS Kesehatan")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Foto BPJAMSOSTEK")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Status Aktif")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Created At")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Updated At")
                                    }}</TableBodyHeader>
                                    <TableBodyHeader>{{
                                        __("Actions")
                                    }}</TableBodyHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    v-for="employee in employees.data"
                                    :key="employee.id"
                                >
                                    <TableBodyAction>{{
                                        employee.id
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.name
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.nik
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.email
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.npwp
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.no_telepon
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.jenis_kelamin
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.tempat_lahir
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.tanggal_lahir
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.tanggal_perekrutan
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.agama
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.alamat
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.rt
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.rw
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.kelurahan
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.kecamatan
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.kabupaten_kota
                                    }}</TableBodyAction>
                                    <TableBodyAction>
                                        <img
                                            :src="employee.foto_profil"
                                            alt="Foto Profil"
                                            class="w-10 h-10 rounded-full"
                                        />
                                    </TableBodyAction>
                                    <TableBodyAction>
                                        <img
                                            :src="employee.foto_ktp"
                                            alt="Foto KTP"
                                            class="w-10 h-10 rounded-full"
                                        />
                                    </TableBodyAction>
                                    <TableBodyAction>
                                        <img
                                            :src="employee.foto_bpjs_kes"
                                            alt="Foto BPJS Kesehatan"
                                            class="w-10 h-10 rounded-full"
                                        />
                                    </TableBodyAction>
                                    <TableBodyAction>
                                        <img
                                            :src="employee.foto_bpjamsostek"
                                            alt="Foto BPJAMSOSTEK"
                                            class="w-10 h-10 rounded-full"
                                        />
                                    </TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.is_aktif
                                            ? "Aktif"
                                            : "Tidak Aktif"
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.created_at
                                    }}</TableBodyAction>
                                    <TableBodyAction>{{
                                        employee.updated_at
                                    }}</TableBodyAction>
                                    <TableBodyAction>
                                        <Link
                                            :href="
                                                route(
                                                    'employees.edit',
                                                    employee.id
                                                )
                                            "
                                            class="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-500"
                                        >
                                            {{ __("Edit") }}
                                        </Link>
                                    </TableBodyAction>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
.table {
    width: 100%;
    border-collapse: collapse;
}
.table th,
.table td {
    border: 1px solid #ddd;
    padding: 8px;
}
.table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #f2f2f2;
    color: black;
}
</style>
