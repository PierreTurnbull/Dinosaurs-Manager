import { DinosaurLink } from "./DinosaurLink/DinosaurLink"
import { useDinosaurs } from "./useDinosaurs"

export const Dinosaurs = () => {
    const dinosaurs = useDinosaurs()

    return (
        <div className="p-16 space-y-8">
            <h1 className="text-4xl font-bold">Mes dinosaures préférés</h1>
            <ul data-test="dinosaurList" className="flex flex-wrap gap-4">
                {
                    dinosaurs?.map(dinosaur => (
                        <DinosaurLink
                            key={dinosaur.id}
                            dinosaur={dinosaur}
                        />
                    ))
                }
            </ul>
        </div>
    )
}