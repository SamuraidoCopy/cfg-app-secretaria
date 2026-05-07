import { getCLTEmployees } from "./actions";
import RescisaoPageClient from "./RescisaoPageClient";

export default async function RescisaoPage() {
    const employees = await getCLTEmployees();
    return <RescisaoPageClient employees={employees as any} />;
}
