import { useQuery } from "@tanstack/react-query"
import { api } from "../../api"
import { TDinosaur } from "../../types/dinosaur/dinosaur"

export const useDinosaurs = () => {
    const { data } = useQuery({
        queryKey: ["dinosaurs"],
        queryFn: async () => {
            const response = await api.dinosaurs.dinosaursList()
            return response.data
        },
        select: (data) => {
            const formatDinosaur = (item: typeof data[0]) => {
                const dinosaur: TDinosaur = {
                    id: item.id,
                    name: item.name,
                    height: item.height,
                    weight: item.weight,
                    description: item.description,
                    imageUrl: item.image_url,
                }

                return dinosaur
            }

            const sortDinosaur = (a: TDinosaur, b: TDinosaur) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())

            const dinosaur: TDinosaur[] = data
                .map(formatDinosaur)
                .sort(sortDinosaur)

            return dinosaur
        },
    })

    return data
}