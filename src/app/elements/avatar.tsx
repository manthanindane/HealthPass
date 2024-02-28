import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function avatar() {
    return (
        <div>
            <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/68989979?s=400&u=1702e4f429f8349e5b169301886ea63fb3c4e36e&v=4" />
                <AvatarFallback>User</AvatarFallback>
            </Avatar>

        </div>
    )
}

export default avatar