<template>
    <Head :title="__('Pengumuman')" />
    <AuthenticatedLayout>
        <template #tabs>
            <NavLink
                :href="route('dashboard.index')"
                :active="route().current('dashboard.index')"
            >
                {{ __("Dashboard") }}
            </NavLink>
            <NavLink
                :href="route('announcements.index')"
                :active="route().current('announcements.index')"
            >
                {{ __("Pengumuman") }}
            </NavLink>
        </template>
        <div class="py-8">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Card class="!mt-0">
                    <h1 class="card-header">{{ __("Pengumuman") }}</h1>
                    <div
                        v-for="announcement in announcements"
                        :key="announcement.id_pengumuman"
                        class="mb-4"
                    >
                        <h2 class="text-xl font-bold">
                            {{ announcement.judul }}
                        </h2>
                        <p>{{ announcement.pesan }}</p>
                        <img
                            :src="announcement.foto"
                            alt="Announcement Photo"
                            class="w-full h-auto mt-2"
                        />
                        <p class="text-sm text-gray-500">
                            {{ __("Created by") }}:
                            {{ announcement.created_by }}
                        </p>
                        <p class="text-sm text-gray-500">
                            {{ __("Created at") }}:
                            {{ announcement.created_at }}
                        </p>
                        <p class="text-sm text-gray-500">
                            {{ __("Updated at") }}:
                            {{ announcement.updated_at }}
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { defineProps } from "vue";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import Card from "@/Components/Card.vue";

const props = defineProps({
    announcements: Array,
});
</script>
