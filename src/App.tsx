import { Layout } from './components/Layout'; // 1. Import your new layout component

function App() {
    return (
        // 2. Wrap your app content inside the Layout component
        <Layout>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Create New Shipment</button>
        </Layout>
    );
}

export default App;