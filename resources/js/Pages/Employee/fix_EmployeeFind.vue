<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, router } from "@inertiajs/vue3";
import EmployeeTabs from "@/Components/Tabs/EmployeeTabs.vue";

import { ref, watch } from "vue";
import debounce from "lodash.debounce";
import Card from "@/Components/Card.vue";
import SearchIcon from "@/Components/Icons/SearchIcon.vue";

const term = ref("");

const search = debounce(() => {
    router.visit(route("employees.find", { term: term.value }), {
        preserveState: true,
        preserveScroll: true,
    });
}, 500);

watch(term, search);

defineProps({
    employees: Object,
});
</script>

<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, router } from "@inertiajs/vue3";
import EmployeeTabs from "@/Components/Tabs/EmployeeTabs.vue";

import { ref, watch } from "vue";
import debounce from "lodash.debounce";
import Card from "@/Components/Card.vue";
import SearchIcon from "@/Components/Icons/SearchIcon.vue";

const term = ref("");

const search = debounce(() => {
    router.visit(route("employees.find", { term: term.value }), {
        preserveState: true,
        preserveScroll: true,
    });
}, 500);

watch(term, search);

defineProps({
    employees: Object,
});
</script>

<template>
    <Head :title="__('Find an Employee')" />
    <AuthenticatedLayout>
        <template #tabs>
            <EmployeeTabs />
        </template>
        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Card class="!mt-0">
                    <h1 class="card-header !mb-4">
                        {{ __("Find an Employee") }}
                    </h1>
                    <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >{{ __("Search") }}
                    </label>

                    <div class="relative">
                        <div
                            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                        >
                            <SearchIcon
                                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                            />
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Employees..."
                            v-model="term"
                            required
                        />
                    </div>

                    <div class="mt-4">
                        <table
                            class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
                        >
                            <thead class="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                                    >
                                        {{ __("Name") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                                    >
                                        {{ __("Email") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                                    >
                                        {{ __("Phone") }}
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                                    >
                                        {{ __("Actions") }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody
                                class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                            >
                                <tr
                                    v-for="employee in employees.data"
                                    :key="employee.id"
                                >
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {{ employee.name }}
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        {{ employee.email }}
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                                    >
                                        {{ employee.phone }}
                                    </td>
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium"
                                    >
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
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<style scoped>
.relative {
    position: relative;
}
.absolute {
    position: absolute;
}
.inset-y-0 {
    top: 0;
    bottom: 0;
}
.left-0 {
    left: 0;
}
.pl-3 {
    padding-left: 0.75rem;
}
.pointer-events-none {
    pointer-events: none;
}
.w-5 {
    width: 1.25rem;
}
.h-5 {
    height: 1.25rem;
}
.text-gray-500 {
    color: #6b7280;
}
.dark\:text-gray-400 {
    color: #9ca3af;
}
.block {
    display: block;
}
.w-full {
    width: 100%;
}
.p-4 {
    padding: 1rem;
}
.pl-10 {
    padding-left: 2.5rem;
}
.text-sm {
    font-size: 0.875rem;
}
.text-gray-900 {
    color: #111827;
}
.border {
    border-width: 1px;
}
.border-gray-300 {
    border-color: #d1d5db;
}
.rounded-lg {
    border-radius: 0.5rem;
}
.bg-gray-50 {
    background-color: #f9fafb;
}
.focus\:ring-blue-500:focus {
    --tw-ring-color: #3b82f6;
}
.focus\:border-blue-500:focus {
    border-color: #3b82f6;
}
.dark\:bg-gray-700 {
    background-color: #374151;
}
.dark\:border-gray-600 {
    border-color: #4b5563;
}
.dark\:placeholder-gray-400::placeholder {
    color: #9ca3af;
}
.dark\:text-white {
    color: #ffffff;
}
.dark\:focus\:ring-blue-500:focus {
    --tw-ring-color: #3b82f6;
}
.dark\:focus\:border-blue-500:focus {
    border-color: #3b82f6;
}
.mt-4 {
    margin-top: 1rem;
}
.min-w-full {
    min-width: 100%;
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
    border-top-width: 1px;
}
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
    border-color: #e5e7eb;
}
.dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
    border-color: #374151;
}
.bg-gray-50 {
    background-color: #f9fafb;
}
.dark\:bg-gray-700 {
    background-color: #374151;
}
.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
}
.text-left {
    text-align: left;
}
.text-xs {
    font-size: 0.75rem;
}
.font-medium {
    font-weight: 500;
}
.text-gray-500 {
    color: #6b7280;
}
.uppercase {
    text-transform: uppercase;
}
.tracking-wider {
    letter-spacing: 0.05em;
}
.dark\:text-gray-400 {
    color: #9ca3af;
}
.bg-white {
    background-color: #ffffff;
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
    border-top-width: 1px;
}
.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
    border-color: #e5e7eb;
}
.dark\:bg-gray-800 {
    background-color: #1f2937;
}
.dark\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {
    border-color: #374151;
}
.whitespace-nowrap {
    white-space: nowrap;
}
.text-sm {
    font-size: 0.875rem;
}
.font-medium {
    font-weight: 500;
}
.text-gray-900 {
    color: #111827;
}
.dark\:text-white {
    color: #ffffff;
}
.text-gray-500 {
    color: #6b7280;
}
.dark\:text-gray-400 {
    color: #9ca3af;
}
.text-indigo-600 {
    color: #4f46e5;
}
.hover\:text-indigo-900:hover {
    color: #312e81;
}
.dark\:text-indigo-400 {
    color: #818cf8;
}
.dark\:hover\:text-indigo-500:hover {
    color: #6366f1;
}
</style>
