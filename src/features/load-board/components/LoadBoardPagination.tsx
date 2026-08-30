import {
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
} from "lucide-react";
import type {ReactNode} from "react";

interface LoadBoardPaginationProps {
    page: number;
    totalPages: number;

    hasPrevious: boolean;
    hasNext: boolean;

    onPageChange: (
        page: number,
    ) => void;
}

type PaginationItem =
    | number
    | "ELLIPSIS";

export function LoadBoardPagination({
                                        page,
                                        totalPages,
                                        hasPrevious,
                                        hasNext,
                                        onPageChange,
                                    }: LoadBoardPaginationProps) {
    if (totalPages <= 1) {
        return null;
    }

    const paginationItems =
        getPaginationItems(
            page,
            totalPages,
        );

    return (
        <nav
            aria-label="Load board pagination"
            className="flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between"
        >
            <p className="text-sm text-slate-500">
                Page{" "}
                <span className="font-medium text-slate-700">
                    {page + 1}
                </span>{" "}
                of{" "}
                <span className="font-medium text-slate-700">
                    {totalPages}
                </span>
            </p>

            <div className="flex items-center justify-between gap-2 sm:justify-end">
                <PaginationButton
                    label="Previous page"
                    disabled={!hasPrevious}
                    onClick={() =>
                        onPageChange(
                            page - 1,
                        )
                    }
                >
                    <ChevronLeft className="h-4 w-4" />

                    <span className="hidden sm:inline">
                        Previous
                    </span>
                </PaginationButton>

                <div className="flex items-center gap-1">
                    {paginationItems.map(
                        (item, index) => {
                            if (
                                item ===
                                "ELLIPSIS"
                            ) {
                                return (
                                    <span
                                        key={`ellipsis-${index}`}
                                        className="flex h-9 w-9 items-center justify-center text-slate-400"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                    </span>
                                );
                            }

                            const isActive =
                                item === page;

                            return (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() =>
                                        onPageChange(
                                            item,
                                        )
                                    }
                                    aria-label={`Go to page ${
                                        item + 1
                                    }`}
                                    aria-current={
                                        isActive
                                            ? "page"
                                            : undefined
                                    }
                                    className={`flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-blue-600 text-white shadow-sm"
                                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }`}
                                >
                                    {item + 1}
                                </button>
                            );
                        },
                    )}
                </div>

                <PaginationButton
                    label="Next page"
                    disabled={!hasNext}
                    onClick={() =>
                        onPageChange(
                            page + 1,
                        )
                    }
                >
                    <span className="hidden sm:inline">
                        Next
                    </span>

                    <ChevronRight className="h-4 w-4" />
                </PaginationButton>
            </div>
        </nav>
    );
}

interface PaginationButtonProps {
    label: string;
    disabled: boolean;

    onClick: () => void;

    children: ReactNode;
}

function PaginationButton({
                              label,
                              disabled,
                              onClick,
                              children,
                          }: PaginationButtonProps) {
    return (
        <button
            type="button"
            aria-label={label}
            disabled={disabled}
            onClick={onClick}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 disabled:pointer-events-none disabled:opacity-40"
        >
            {children}
        </button>
    );
}

function getPaginationItems(
    currentPage: number,
    totalPages: number,
): PaginationItem[] {
    /*
     * Example:
     *
     * 1 2 3 4 5
     *
     * 1 ... 4 5 6 ... 10
     *
     * 1 ... 8 9 10
     */

    if (totalPages <= 7) {
        return Array.from(
            {
                length: totalPages,
            },
            (_, index) => index,
        );
    }

    const items: PaginationItem[] = [];

    const firstPage = 0;
    const lastPage = totalPages - 1;

    items.push(firstPage);

    if (currentPage <= 3) {
        items.push(1, 2, 3, 4);
        items.push("ELLIPSIS");
        items.push(lastPage);

        return items;
    }

    if (currentPage >= lastPage - 3) {
        items.push("ELLIPSIS");

        for (
            let page = lastPage - 4;
            page <= lastPage;
            page++
        ) {
            items.push(page);
        }

        return items;
    }

    items.push("ELLIPSIS");

    items.push(
        currentPage - 1,
        currentPage,
        currentPage + 1,
    );

    items.push("ELLIPSIS");

    items.push(lastPage);

    return items;
}