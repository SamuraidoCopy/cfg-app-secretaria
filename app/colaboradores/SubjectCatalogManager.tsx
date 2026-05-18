"use client";

import { BookOpen, Plus, Trash2 } from "lucide-react";
import { addSubject, deleteSubject } from "./actions";

type SubjectCatalogItem = {
    id: string;
    name: string;
    usageCount: number;
};

export default function SubjectCatalogManager({ subjects }: { subjects: SubjectCatalogItem[] }) {
    const handleAdd = async () => {
        const input = document.getElementById("new-subject-input") as HTMLInputElement;
        if (!input || !input.value.trim()) return;
        const formData = new FormData();
        formData.append("name", input.value.trim());
        await addSubject(formData);
        input.value = "";
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAdd();
        }
    };

    return (
        <section className="mb-8 rounded-[24px] border border-wine-100/50 bg-white p-5 shadow-premium">
            <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-wine-50 text-wine-800">
                        <BookOpen className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="font-bold text-wine-950">Materias cadastradas</h2>
                        <p className="text-sm text-wine-700/70">Estas sao as opcoes que aparecem no cadastro dos professores.</p>
                    </div>
                </div>
                <div className="flex w-full gap-2 md:w-auto">
                    <input
                        id="new-subject-input"
                        name="name"
                        type="text"
                        required
                        placeholder="Nova materia"
                        onKeyDown={handleKeyDown}
                        className="min-w-0 flex-1 rounded-lg border border-wine-200 bg-white px-3 py-2 text-sm text-wine-950 focus:outline-none focus:ring-2 focus:ring-wine-500 md:w-56"
                    />
                    <button type="button" onClick={handleAdd} className="inline-flex items-center gap-2 rounded-lg bg-wine-800 px-3 py-2 text-sm font-bold text-white hover:bg-wine-900">
                        <Plus className="h-4 w-4" />
                        Adicionar
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                    <div key={subject.id} className="inline-flex items-center gap-2 rounded-lg border border-wine-100 bg-wine-50 px-3 py-2 text-sm text-wine-900">
                        <span>{subject.name}</span>
                        {subject.usageCount > 0 ? (
                            <span className="rounded bg-white/80 px-1.5 py-0.5 text-[10px] font-bold text-wine-500">{subject.usageCount} uso(s)</span>
                        ) : (
                            <div className="inline-block">
                                <button type="button" onClick={async () => await deleteSubject(subject.id)} className="text-wine-400 hover:text-rose-600" title="Remover materia">
                                    <Trash2 className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
