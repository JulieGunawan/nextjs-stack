export default function UserProfile({params}:any) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <p className="text-2xl">Profile ProfilePage
                <span className="p-2 m-2 bg-orange-300">{params.id}</span>
            </p>
        </div>
    )
}