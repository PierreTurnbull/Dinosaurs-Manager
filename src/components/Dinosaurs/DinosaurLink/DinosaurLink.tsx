import { Link } from "react-router-dom"
import { TDinosaur } from "../../../types/dinosaur/dinosaur"

type TDinosaurLinkProps = {
    dinosaur: TDinosaur
}

export const DinosaurLink = ({
    dinosaur,
}: TDinosaurLinkProps) => {
    return (
        <li
            data-test="dinosaur"
            className={`
                bg-white
                relative
                z-50
                w-[200px]
                h-[200px]
                border-2
                border-solid
                border-yellow-800
                rounded-sm
                shadow
                shadow-yellow-500
                group/dinosaur
                hover:scale-125
                hover:z-[100]
                transition
                cursor-pointer
            `}
        >
            <Link to={`/dinosaurs/${dinosaur.id}`}>
                <div
                    className={
                        `
                            bg-yellow-500 bg-opacity-50
                            w-full
                            h-full
                            p-4
                        `
                    }
                >
                    <img
                        data-test="dinosaurImage"
                        src={dinosaur.imageUrl}
                        alt={`Cover image of ${dinosaur.name}`}
                        className="absolute top-0 left-0 w-full h-full object-cover group-hover/dinosaur:opacity-20 transition"
                    />
                    <h2
                        data-test="dinosaurTitle"
                        className={`
                            text-lg
                            relative
                            w-max
                            bg-yellow-500
                            px-2
                            rounded-sm
                            group-hover/dinosaur:mt-[50%]
                            group-hover/dinosaur:ml-[50%]
                            group-hover/dinosaur:-translate-x-1/2
                            group-hover/dinosaur:-translate-y-1/2
                            transition-all
                        `}
                    >{dinosaur.name}</h2>
                </div>
            </Link>
        </li>
    )
}