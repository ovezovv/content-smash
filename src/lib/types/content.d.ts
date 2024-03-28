type Content = {
  uid: number;
  img: string;
  desc: string;
}

type ContentResponse = {
  type: string;
  data: Content[]
}