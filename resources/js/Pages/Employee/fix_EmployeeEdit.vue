<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, useForm } from "@inertiajs/vue3";
import EmployeeTabs from "@/Components/Tabs/EmployeeTabs.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import GenericModal from "@/Components/GenericModal.vue";
import { useToast } from "vue-toastification";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Swal from "sweetalert2";
import { Switch } from "@headlessui/vue";
import ToolTip from "@/Components/ToolTip.vue";
import Card from "@/Components/Card.vue";
import { inject } from "vue";
import { __ } from "@/Composables/useTranslations.js";
import dayjs from "dayjs";

const props = defineProps({
    employee: Object,
    href: String,
    departments: Object,
    branches: Object,
    positions: Object,
    shifts: Object,
    roles: Object,
});

const form = useForm({
    name: props.employee.name,
    national_id: props.employee.national_id,
    email: props.employee.email,
    phone: props.employee.phone,
    address: props.employee.address,
    bank_acc_no: props.employee.bank_acc_no,
    hired_on: props.employee.hired_on,
    branch_id: props.employee.branch_id,
    department_id: props.employee.department_id,
    position_id:
        props.employee.employee_positions[
            props.employee.employee_positions.length - 1
        ]["position"]?.["id"],
    shift_id:
        props.employee.employee_shifts[
            props.employee.employee_shifts.length - 1
        ]["shift"]["id"],
    currency:
        props.employee.salaries[props.employee.salaries.length - 1]["currency"],
    salary: props.employee.salaries[props.employee.salaries.length - 1][
        "salary"
    ],
    role: props.employee.roles[props.employee.roles.length - 1]["name"],
    is_remote: props.employee.is_remote,
});

const positionForm = useForm({
    name: "",
    description: "",
});

const shiftForm = useForm({
    name: "",
    start_time: "",
    end_time: "",
    shift_payment_multiplier: "",
    description: "",
});

const branchForm = useForm({
    name: "",
    address: "",
    phone: "",
    email: "",
});
const departmentForm = useForm({
    name: "",
});

const submit = () => {
    form.hired_on = dayjs(form.hired_on).format("YYYY-MM-DD");
    form.put(route("employees.update", { id: props.employee.id }), {
        preserveScroll: true,
        onError: () => {
            useToast().error(__("Error Editing Employee"));
        },
        onSuccess: () => {
            useToast().success(__("Employee Edited Successfully"));
        },
    });
};
const destroy = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton:
                "mx-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
            cancelButton:
                "text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
        },
        buttonsStyling: false,
    });
    swalWithBootstrapButtons
        .fire({
            title: __("Are you sure?"),
            text: __("You won't be able to revert this!"),
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: __("Yes, Delete!"),
            cancelButtonText: __("No, Cancel!"),
            reverseButtons: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                form.delete(
                    route("employees.destroy", { id: props.employee.id }),
                    {
                        preserveScroll: true,
                        onError: () => {
                            useToast().error(__("Error Removing Employee"));
                        },
                        onSuccess: () => {
                            Swal.fire(__("Employee Removed!"), "", "success");
                        },
                    }
                );
            }
        });
};

const submitPosition = () => {
    positionForm.post(route("positions.store"), {
        preserveScroll: true,
        onError: () => {
            useToast().error(__("Error Creating Position"));
        },
        onSuccess: () => {
            useToast().success(__("Position Created Successfully"));
            document.getElementById("closePositionModal").click();
            positionForm.reset();
            form.position_id = props.positions.length;
        },
    });
};
const submitBranch = () => {
    branchForm.post(route("branches.store"), {
        preserveScroll: true,
        onError: () => {
            useToast().error(__("Error Creating Branch"));
        },
        onSuccess: () => {
            useToast().success(__("Branch Created Successfully"));
            document.getElementById("closeBranchModal").click();
            branchForm.reset();
            form.branch_id = props.branches.length;
        },
    });
};
const submitDepartment = () => {
    departmentForm.post(route("departments.store"), {
        preserveScroll: true,
        onError: () => {
            useToast().error(__("Error Creating Department"));
        },
        onSuccess: () => {
            useToast().success(__("Department Created Successfully"));
            document.getElementById("closeDepartmentModal").click();
            departmentForm.reset();
            form.department_id = props.departments.length;
        },
    });
};
const submitShift = () => {
    shiftForm.post(route("shifts.store"), {
        preserveScroll: true,
        onError: () => {
            useToast().error(__("Error Creating Shift"));
        },
        onSuccess: () => {
            useToast().success(__("Shift Created Successfully"));
            document.getElementById("closeShiftModal").click();
            shiftForm.reset();
            form.shift_id = props.shifts.length;
        },
    });
};
</script>

<template>
    <Head :title="__('Edit Employee')" />
    <AuthenticatedLayout>
        <template #tabs>
            <EmployeeTabs />
        </template>
        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Card class="!mt-0">
                    <p class="card-header">
                        {{ __("Edit Karyawan") }}
                    </p>
                    <form @submit.prevent="submit" class="form">
                        <div class="grid grid-cols-2 gap-8">
                            <div>
                                <InputLabel for="name" :value="__('Nama')" />
                                <TextInput
                                    id="name"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.name,
                                    }"
                                    v-model="form.name"
                                    required
                                    autocomplete="off"
                                    placeholder="Nama Karyawan"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.name"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="national_id"
                                    :value="__('NIK')"
                                />
                                <TextInput
                                    id="national_id"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.national_id,
                                    }"
                                    v-model="form.national_id"
                                    required
                                    pattern="[0-9]{14}"
                                    autocomplete="off"
                                    placeholder="29412010135971"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.national_id"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel
                                    for="phone"
                                    :value="__('Nomor Telepon')"
                                />
                                <TextInput
                                    id="phone"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.phone,
                                    }"
                                    v-model="form.phone"
                                    required
                                    autocomplete="off"
                                    placeholder="0110118999"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.phone"
                                />
                            </div>
                            <div>
                                <InputLabel for="email" :value="__('Email')" />
                                <TextInput
                                    id="email"
                                    type="email"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.email,
                                    }"
                                    v-model="form.email"
                                    required
                                    autocomplete="off"
                                    placeholder="example@example.com"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.email"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel for="npwp" :value="__('NPWP')" />
                                <TextInput
                                    id="npwp"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.npwp,
                                    }"
                                    v-model="form.npwp"
                                    required
                                    autocomplete="off"
                                    placeholder="123456789012345"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.npwp"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="password"
                                    :value="__('Password')"
                                />
                                <TextInput
                                    id="password"
                                    type="password"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.password,
                                    }"
                                    v-model="form.password"
                                    required
                                    autocomplete="off"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.password"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel
                                    for="jenis_kelamin"
                                    :value="__('Jenis Kelamin')"
                                />
                                <TextInput
                                    id="jenis_kelamin"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.jenis_kelamin,
                                    }"
                                    v-model="form.jenis_kelamin"
                                    required
                                    autocomplete="off"
                                    placeholder="Laki-laki/Perempuan"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.jenis_kelamin"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="tempat_lahir"
                                    :value="__('Tempat Lahir')"
                                />
                                <TextInput
                                    id="tempat_lahir"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.tempat_lahir,
                                    }"
                                    v-model="form.tempat_lahir"
                                    required
                                    autocomplete="off"
                                    placeholder="Tempat Lahir"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.tempat_lahir"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel
                                    for="tanggal_lahir"
                                    :value="__('Tanggal Lahir')"
                                />
                                <TextInput
                                    id="tanggal_lahir"
                                    type="date"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.tanggal_lahir,
                                    }"
                                    v-model="form.tanggal_lahir"
                                    required
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.tanggal_lahir"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="tanggal_perekrutan"
                                    :value="__('Tanggal Perekrutan')"
                                />
                                <TextInput
                                    id="tanggal_perekrutan"
                                    type="date"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.tanggal_perekrutan,
                                    }"
                                    v-model="form.tanggal_perekrutan"
                                    required
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.tanggal_perekrutan"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel for="agama" :value="__('Agama')" />
                                <TextInput
                                    id="agama"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.agama,
                                    }"
                                    v-model="form.agama"
                                    required
                                    autocomplete="off"
                                    placeholder="Agama"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.agama"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="alamat"
                                    :value="__('Alamat')"
                                />
                                <TextInput
                                    id="alamat"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.alamat,
                                    }"
                                    v-model="form.alamat"
                                    required
                                    autocomplete="off"
                                    placeholder="Alamat"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.alamat"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel for="rt" :value="__('RT')" />
                                <TextInput
                                    id="rt"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500': form.errors.rt,
                                    }"
                                    v-model="form.rt"
                                    required
                                    autocomplete="off"
                                    placeholder="RT"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.rt"
                                />
                            </div>
                            <div>
                                <InputLabel for="rw" :value="__('RW')" />
                                <TextInput
                                    id="rw"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500': form.errors.rw,
                                    }"
                                    v-model="form.rw"
                                    required
                                    autocomplete="off"
                                    placeholder="RW"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.rw"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel
                                    for="kelurahan"
                                    :value="__('Kelurahan')"
                                />
                                <TextInput
                                    id="kelurahan"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.kelurahan,
                                    }"
                                    v-model="form.kelurahan"
                                    required
                                    autocomplete="off"
                                    placeholder="Kelurahan"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.kelurahan"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="kecamatan"
                                    :value="__('Kecamatan')"
                                />
                                <TextInput
                                    id="kecamatan"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.kecamatan,
                                    }"
                                    v-model="form.kecamatan"
                                    required
                                    autocomplete="off"
                                    placeholder="Kecamatan"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.kecamatan"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel
                                    for="kabupaten_kota"
                                    :value="__('Kabupaten/Kota')"
                                />
                                <TextInput
                                    id="kabupaten_kota"
                                    type="text"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.kabupaten_kota,
                                    }"
                                    v-model="form.kabupaten_kota"
                                    required
                                    autocomplete="off"
                                    placeholder="Kabupaten/Kota"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.kabupaten_kota"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="foto_profil"
                                    :value="__('Foto Profil')"
                                />
                                <TextInput
                                    id="foto_profil"
                                    type="file"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.foto_profil,
                                    }"
                                    v-model="form.foto_profil"
                                    required
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.foto_profil"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel
                                    for="foto_ktp"
                                    :value="__('Foto KTP')"
                                />
                                <TextInput
                                    id="foto_ktp"
                                    type="file"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.foto_ktp,
                                    }"
                                    v-model="form.foto_ktp"
                                    required
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.foto_ktp"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="foto_bpjs_kes"
                                    :value="__('Foto BPJS Kesehatan')"
                                />
                                <TextInput
                                    id="foto_bpjs_kes"
                                    type="file"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.foto_bpjs_kes,
                                    }"
                                    v-model="form.foto_bpjs_kes"
                                    required
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.foto_bpjs_kes"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel
                                    for="foto_bpjamsostek"
                                    :value="__('Foto BPJAMSOSTEK')"
                                />
                                <TextInput
                                    id="foto_bpjamsostek"
                                    type="file"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.foto_bpjamsostek,
                                    }"
                                    v-model="form.foto_bpjamsostek"
                                    required
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.foto_bpjamsostek"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="is_aktif"
                                    :value="__('Status Aktif')"
                                />
                                <TextInput
                                    id="is_aktif"
                                    type="checkbox"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.is_aktif,
                                    }"
                                    v-model="form.is_aktif"
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.is_aktif"
                                />
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-8 mt-4">
                            <div>
                                <InputLabel
                                    for="created_at"
                                    :value="__('Created At')"
                                />
                                <TextInput
                                    id="created_at"
                                    type="datetime-local"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.created_at,
                                    }"
                                    v-model="form.created_at"
                                    required
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.created_at"
                                />
                            </div>
                            <div>
                                <InputLabel
                                    for="updated_at"
                                    :value="__('Updated At')"
                                />
                                <TextInput
                                    id="updated_at"
                                    type="datetime-local"
                                    class="mt-1 block w-full"
                                    :class="{
                                        'border border-red-500':
                                            form.errors.updated_at,
                                    }"
                                    v-model="form.updated_at"
                                    required
                                />
                                <InputError
                                    class="mt-2"
                                    :message="form.errors.updated_at"
                                />
                            </div>
                        </div>

                        <div class="mt-8">
                            <PrimaryButton class="ml-4">
                                {{ __("Submit") }}
                            </PrimaryButton>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                national_id: "",
                phone: "",
                email: "",
                npwp: "",
                password: "",
                jenis_kelamin: "",
                tempat_lahir: "",
                tanggal_lahir: "",
                tanggal_perekrutan: "",
                agama: "",
                alamat: "",
                rt: "",
                rw: "",
                kelurahan: "",
                kecamatan: "",
                kabupaten_kota: "",
                foto_profil: "",
                foto_ktp: "",
                foto_bpjs_kes: "",
                foto_bpjamsostek: "",
                is_aktif: false,
                created_at: "",
                updated_at: "",
            },
            errors: {
                name: null,
                national_id: null,
                phone: null,
                email: null,
                npwp: null,
                password: null,
                jenis_kelamin: null,
                tempat_lahir: null,
                tanggal_lahir: null,
                tanggal_perekrutan: null,
                agama: null,
                alamat: null,
                rt: null,
                rw: null,
                kelurahan: null,
                kecamatan: null,
                kabupaten_kota: null,
                foto_profil: null,
                foto_ktp: null,
                foto_bpjs_kes: null,
                foto_bpjamsostek: null,
                is_aktif: null,
                created_at: null,
                updated_at: null,
            },
        };
    },
    methods: {
        submit() {
            this.$inertia.post(
                route("employees.update", this.form.id),
                this.form,
                {
                    onError: (errors) => {
                        this.errors = errors;
                        useToast().error(__("Error Updating Employee"));
                    },
                    onSuccess: () => {
                        useToast().success(__("Employee Updated Successfully"));
                    },
                }
            );
        },
    },
};
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
}
.grid {
    display: grid;
}
.mt-1 {
    margin-top: 0.25rem;
}
.mt-2 {
    margin-top: 0.5rem;
}
.mt-4 {
    margin-top: 1rem;
}
.mt-8 {
    margin-top: 2rem;
}
.block {
    display: block;
}
.w-full {
    width: 100%;
}
.border {
    border-width: 1px;
}
.border-red-500 {
    border-color: #f56565;
}
</style>
