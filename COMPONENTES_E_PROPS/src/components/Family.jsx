import Profile from "./Profile"

const Family = ({ members }) => {
    return <>
        {members.map((member, index) => (
            <Profile
                key={index}
                name={member.name}
                age={member.age}
                job={member.job} />
        ))}
    </>
}
export default Family;