import ResortCard from "./resortcard.tsx"
import type { ResortListing } from "../data/data.ts"

interface ResortCardProps {
    listing: ResortListing[];
}

export default function ResortContainer({listing}: ResortCardProps) {
    return (
        <div className="container">
            {listing.map((list) => (
                <ResortCard key={list.id} {...list} />
            ))}
        </div>
    )
}