import {
    ChevronDown,
    Truck,
    X,
} from "lucide-react";

import LoadForm from "./loadForm/LoadForm";
import useLoads from "./hooks/useLoads.ts";
import {createEmptyLoad} from "./data/createEmptyLoad.ts";
import type {Carrier} from "./types/LoadsPageTypes.ts";
import type {LoadRecord} from "./types/LoadsPageTypes.ts";
import LoadsHeader from "./components/LoadsHeader.tsx";
import LoadsMetrics from "./components/LoadsMetrics.tsx";
import LoadsSearch from "./components/LoadsSearch.tsx";
import LoadsStatusTabs from "./components/LoadStatusTabs.tsx";
import LoadsTable from "./components/LoadsTable.tsx";

export default function LoadsPage() {
    const {
        activeTab,
        searchQuery,
        modal,
        openMenuId,
        carrierModalLoad,
        selectedLoadId,

        setActiveTab,
        setSearchQuery,
        setModal,
        setOpenMenuId,
        setCarrierModalLoad,
        setSelectedLoadId,

        counts,
        filteredLoads,
        metrics,

        carriers,

        handleCreate,
        handleSaveDraft,
        handleUpdate,
        handleDelete,
        handleAssign,
        handleStatusChange,
        handleDuplicate,
    } = useLoads();
    /*
     * ---------------------------------------------------------
     * Render
     * ---------------------------------------------------------
     */

    return (
        <div className="min-h-full bg-slate-50">
            {/* Page header */}
            <LoadsHeader onCreateLoad={() =>
                setModal({
                    type: "create",
                })
            } />

            {/* Metrics */}
            <LoadsMetrics metrics={metrics}/>

            {/* Search / filters */}
            <LoadsSearch
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />


            {/* Status tabs */}
            <LoadsStatusTabs
                activeTab={activeTab}
                counts={counts}
                onTabChange={setActiveTab}
            />

            {/* Table */}
            <LoadsTable
                loads={filteredLoads}
                counts={counts}
                activeTab={activeTab}
                openMenuId={openMenuId}
                selectedLoadId={selectedLoadId}
                onToggleMenu={(loadId) =>
                    setOpenMenuId(
                        openMenuId === loadId
                            ? null
                            : loadId,
                    )
                }
                onCloseMenu={() =>
                    setOpenMenuId(null)
                }
                onSelectLoad={setSelectedLoadId}
                onOpenCarrierModal={setCarrierModalLoad}
                onOpenEdit={(load) =>
                    setModal({
                        type: "edit",
                        load,
                    })
                }
                onDuplicate={handleDuplicate}
                onDelete={handleDelete}
                onAssign={setCarrierModalLoad}
                onStatusChange={handleStatusChange}
            />

            {/* Create / Edit form */}
            {modal && (
                <ModalShell
                    onClose={() => setModal(null)}
                    title={
                        modal.type === "create"
                            ? "Create a new load"
                            : "Edit load"
                    }
                >
                    {modal.type === "create" ? (
                        <LoadForm
                            mode="create"
                            initialValues={createEmptyLoad()}
                            onSubmit={handleCreate}
                            onSaveDraft={handleSaveDraft}
                            onCancel={() => setModal(null)}
                        />
                    ) : (
                        <LoadForm
                            mode="edit"
                            initialValues={modal.load.data}
                            status={modal.load.status}
                            onSubmit={(data) =>
                                handleUpdate(
                                    modal.load.id,
                                    data,
                                )
                            }
                            onSaveDraft={(data) =>
                                handleUpdate(
                                    modal.load.id,
                                    data,
                                )
                            }
                            onCancel={() => setModal(null)}
                        />
                    )}
                </ModalShell>
            )}

            {/* Carrier assignment */}
            {carrierModalLoad && (
                <CarrierAssignmentModal
                    load={carrierModalLoad}
                    carriers={carriers}
                    onClose={() =>
                        setCarrierModalLoad(null)
                    }
                    onAssign={handleAssign}
                />
            )}
        </div>


    );
}
/*
 * =============================================================
 * Modal shell
 * =============================================================
 */

type ModalShellProps = {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
};

function ModalShell({
                        title,
                        children,
                        onClose,
                    }: ModalShellProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/30 p-6 backdrop-blur-[2px]">
            <div className="my-4 w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                    <h2 className="text-base font-semibold text-slate-900">
                        {title}
                    </h2>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                        aria-label="Close"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div>{children}</div>
            </div>
        </div>
    );
}

/*
 * =============================================================
 * Carrier assignment modal
 * =============================================================
 */

type CarrierAssignmentModalProps = {
    load: LoadRecord;
    carriers: Carrier[];
    onClose: () => void;
    onAssign: (loadId: string, carrierName: string) => void;
};

function CarrierAssignmentModal({
                                    load,
                                    carriers,
                                    onClose,
                                    onAssign,
                                }: CarrierAssignmentModalProps) {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/30 p-6 backdrop-blur-[2px]">
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                    <div>
                        <h2 className="text-base font-semibold text-slate-900">
                            Assign carrier
                        </h2>

                        <p className="mt-0.5 text-xs text-slate-500">
                            {load.data.reference}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                <div className="space-y-2 p-4">
                    {carriers.map((carrier) => (
                        <button
                            key={carrier.id}
                            type="button"
                            onClick={() =>
                                onAssign(
                                    load.id,
                                    carrier.name,
                                )
                            }
                            className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-3 text-left transition hover:border-blue-300 hover:bg-blue-50/50"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                    <Truck className="h-4 w-4" />
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-slate-800">
                                        {carrier.name}
                                    </p>

                                    <p className="text-xs text-slate-400">
                                        Available carrier
                                    </p>
                                </div>
                            </div>

                            <ChevronDown className="h-4 w-4 -rotate-90 text-slate-400" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}