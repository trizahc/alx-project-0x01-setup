export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
  }


//users interface
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
} 

//posts interface
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

//post modal interface
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

//user modal interface
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}