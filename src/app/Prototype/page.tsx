"use client"; // Include if using Next.js or similar
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase";
import { useState } from "react";

function Page() {
  const [inputId, setInputId] = useState('');
  const [fetchedData, setFetchedData] = useState(null);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('basic_info')
        .select()
        .eq('id', inputId); // Corrected to eq('id', inputId) for querying by id
      if (error) {
        throw error;
      }
      setFetchedData(data);
    } catch (error) {
      console.log('error', error);
    }   
  };

  // const handleOnChange = async (event) => {
  //   setInputId(event.target.value);
  // }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Input 
        type="number" 
        name="Id" 
        value={inputId} 
        onChange={handleOnChange} 
        placeholder="Write Patient Id for fetching the data" 
        className="w-3/5 md:w-1/2 mt-4" 
      />
      <Button 
        variant="default" 
        onClick={fetchData} 
        className="w-auto md:w-1/3 mt-4"
      >
        Fetch Data
      </Button>

      {/* Display fetched data */}
      {fetchedData && (
        <div className="mt-4">
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(fetchedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Page;
