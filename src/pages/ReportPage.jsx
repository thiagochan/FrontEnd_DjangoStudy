import axios from "axios";

function ReportPage() {
    async function handleSubmit(e) {
        e.preventDefault();

        const data = new FormData(e.target);
        try {
            const response = await axios.get("http://localhost:8000/report/" + data.get("resource") + "/");
            const blob = new Blob([response.data], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);

            window.open(url, "_blank");

            setTimeout(() => window.URL.revokeObjectURL(url), 10000);
        }
        catch(err) {
            console.error(err);
        }
    }

    return (
        <div className="min-h-screen w-screen h-screen flex bg-slate-500 justify-center p-6">
            <div className="space-y-4 ">
                
                <h1 className="text-white p-6">Página de Relatório</h1>
                <div className="rounded-md bg-slate-300 p-2">
                    <form onSubmit={handleSubmit} className="flex w-full space-x-3">
                        <select name="resource" className="bg-white w-3/4 p-1 border border-gray-700 rounded-md text-black">
                            <option value="people">Pessoas</option>
                            <option value="place">Lugares</option>
                        </select>
                        <button type="submit" className="w-1/4 text-white">Confirmar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReportPage;