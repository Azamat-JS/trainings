import { z } from 'zod'; 

const url = 'https://reqres.in/api/users?page=2';

const tourSchema = z.object({
    page: z.number(),
    per_page: z.number(),
    total: z.number(),
    total_pages: z.number(),
    data: z.array(
        z.object({
            id: z.number(),
            email: z.string(),
            first_name: z.string(),
            last_name: z.string(),
            avatar: z.string(),
        })
    ),
});

type Tour = z.infer<typeof tourSchema>;

async function fetchAndValidate(url: string): Promise<Tour> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }

        const jsonData = await response.json();
        // Validate the response with the schema
        const validatedData = tourSchema.parse(jsonData);
        console.log(validatedData); // logging the validated data for reference

        return validatedData; // return the validated data
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Validation error:", error.errors);
        } else {
            console.error("Error:", error);
        }

        return null as unknown as Tour; // handle error by returning an empty or fallback value
    }
}

fetchAndValidate(url).then((validatedData) => {
    console.log("Validated Data:", validatedData);
});



