<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('distribusi_pengumuman', function (Blueprint $table) {
            $table->id_pengumuman()->constrained('pengumuman')->onDelete('cascade');
            $table->id_departemen()->constrained('departemen')->onDelete('cascade');
            $table->unique(['id_pengumuman', 'id_departemen']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('distribusi_pengumuman');
    }
};
