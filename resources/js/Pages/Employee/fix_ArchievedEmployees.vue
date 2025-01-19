<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, router } from "@inertiajs/vue3";
import EmployeeTabs from "@/Components/Tabs/EmployeeTabs.vue";
import SearchBar from "@/Components/SearchBar.vue";
import { ref, watch } from "vue";
import debounce from "lodash.debounce";
import Table from "@/Components/Table/Table.vue";
import TableHead from "@/Components/Table/TableHead.vue";
import TableBody from "@/Components/Table/TableBody.vue";
import TableBodyHeader from "@/Components/Table/TableBodyHeader.vue";
import TableRow from "@/Components/Table/TableRow.vue";
import Card from "@/Components/Card.vue";

const term = ref("");
const sort = ref("id_karyawan");
const sort_dir = ref(true);
const search = debounce(() => {
    router.visit(
        route("karyawan.archived", {
            term: term.value,
            sort: sort.value,
            sort_dir: sort_dir.value,
        }),
        {
            preserveState: true,
            preserveScroll: true,
        }
    );
}, 400);
watch(term, search);
watch(sort, search);
watch(sort_dir, search);

const props = defineProps({
    karyawan: Object,
});
</script>

<template>
    <Head :title="__('Archived Employees')" />
    <AuthenticatedLayout>
        <template #tabs>
            <EmployeeTabs />
        </template>
        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Card class="!mt-0">
                    <div class="flex justify-between items-center gap-4 pb-4">
                        <h1 class="card-header !mb-4">
                            {{ __("Archived Employees") }}
                        </h1>
                        <SearchBar>
                            <input
                                type="text"
                                id="table-search-karyawan"
                                v-model="term"
                                class="input-class"
                                :placeholder="
                                    __('Search for an archived employee')
                                "
                            />
                        </SearchBar>
                    </div>

                    <Table
                        :links="karyawan.links"
                        :showingNumber="karyawan.data.length"
                        :totalNumber="karyawan.total"
                    >
                        <template #Head>
                            <TableHead
                                @click="
                                    sort = 'id_karyawan';
                                    sort_dir = !sort_dir;
                                "
                                sortable
                                >{{ __("ID Karyawan") }} ↕</TableHead
                            >
                            <TableHead
                                @click="
                                    sort = 'nama';
                                    sort_dir = !sort_dir;
                                "
                                sortable
                                >{{ __("Nama") }} ↕</TableHead
                            >
                            <TableHead>{{ __("NIK") }}</TableHead>
                            <TableHead>{{ __("Email") }}</TableHead>
                            <TableHead>{{ __("No Telepon") }}</TableHead>
                            <TableHead>{{
                                __("Tanggal Perekrutan")
                            }}</TableHead>
                            <TableHead>{{ __("Is Aktif") }}</TableHead>
                        </template>

                        <template #Body>
                            <TableRow
                                v-for="karyawanData in karyawan.data"
                                :key="karyawanData.id_karyawan"
                            >
                                <TableBodyHeader>{{
                                    karyawanData.id_karyawan
                                }}</TableBodyHeader>
                                <TableBodyHeader>{{
                                    karyawanData.nama
                                }}</TableBodyHeader>
                                <TableBody>{{ karyawanData.nik }}</TableBody>
                                <TableBody>{{ karyawanData.email }}</TableBody>
                                <TableBody>{{
                                    karyawanData.no_telepon
                                }}</TableBody>
                                <TableBody>{{
                                    karyawanData.tanggal_perekrutan
                                }}</TableBody>
                                <TableBody>{{
                                    karyawanData.is_aktif ? "Yes" : "No"
                                }}</TableBody>
                            </TableRow>
                        </template>
                    </Table>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
