import LoadForm from "./loadForm/LoadForm.tsx";
import type {
    Load,
    LoadStatus,
} from "./loadForm/LoadFormTypes.ts";

interface EditLoadFormProps {
    load: Load;
    status: LoadStatus;
    onCancel: () => void;
    onSave: (data: Load) => Promise<void> | void;
    onSaveDraft?: (data: Load) => Promise<void> | void;
}

export default function EditLoadForm({
                                         load,
                                         status,
                                         onCancel,
                                         onSave,
                                         onSaveDraft,
                                     }: EditLoadFormProps) {
    return (
        <LoadForm
            mode="edit"
            initialValues={load}
            status={status}
            onCancel={onCancel}
            onSubmit={onSave}
            onSaveDraft={onSaveDraft}
        />
    );
}