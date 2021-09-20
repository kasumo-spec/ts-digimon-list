import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import api from "../../services";

interface Digimon {
    name: string,
    level: string,
    img: string
}

interface FavoriteDigimonsProviderProps {
    children: ReactNode
}

interface FavoriteDigimonsProviderData {
    favorites: Digimon[],
    digimons: Digimon[],
    error: string,
    addDigimon: (digimon: Digimon) => void,
    deleteDigimon: (digimon: Digimon) => void
}

const FavoriteDigimonsContext = createContext<FavoriteDigimonsProviderData>(
    {} as FavoriteDigimonsProviderData
)

export const FavoriteDigimonsProvider = ({
    children,
}: FavoriteDigimonsProviderProps) => {
    const [favorites, setFavorites] = useState<Digimon[]>([])
    const [digimons, setDigimons] = useState<Digimon[]>([])
    const [error, setError] = useState<string>("")

    const addDigimon = (digimon: Digimon) => {
        setFavorites([...favorites, digimon])
    }

    const deleteDigimon = (digimonToBeDeleted: Digimon) => {
        const newList = favorites.filter(
            (digimon) => digimon.name !== digimonToBeDeleted.name
        )
        setFavorites(newList)
    }

    useEffect(() => {
        api.get("/digimon")
            .then((response) => {
                setDigimons([...response.data])
            })
            .catch(() => setError("Deu merda na conexão!"))
    }, [])

    return (
        <FavoriteDigimonsContext.Provider
            value={{ error, digimons, favorites, addDigimon, deleteDigimon }}>
            {children}
        </FavoriteDigimonsContext.Provider>
    )
}

export const useFavoriteDigimons = () => useContext(FavoriteDigimonsContext)