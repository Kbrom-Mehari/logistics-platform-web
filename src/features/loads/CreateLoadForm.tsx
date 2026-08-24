import LoadForm from "./loadForm/LoadForm";
import type { Load } from "./loadForm/LoadFormTypes.ts";

interface CreateLoadFormProps {
    onCancel: () => void;
    onCreate: (data: Load) => Promise<void> | void;
    onSaveDraft: (data: Load) => Promise<void> | void;
}

export default function CreateLoadForm({
                                           onCancel,
                                           onCreate,
                                           onSaveDraft,
                                       }: CreateLoadFormProps) {
    return (
        <LoadForm
            mode="create"
            onCancel={onCancel}
            onSubmit={onCreate}
            onSaveDraft={onSaveDraft}
        />
    );
}