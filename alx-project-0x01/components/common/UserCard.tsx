import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-gray-600">🌐 {website}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>🏠 {address.street}, {address.city}</p>
        <p>🏢 {company.name} — {company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
