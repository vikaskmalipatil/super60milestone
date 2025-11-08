import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { chefs } from "@/data/cheflistdata";
import Chefdetails from "@/components/chefdetails";
import Imagesection from "@/components/imagesection";
import Openinghour from "@/components/openinghour";
import Blogstandard from "@/components/blogstandard";
import { standardblogs } from "@/data/standardblog";
export default function Home() {
  return (
    <div>
      <Navbar />

      <Imagesection heading="Blog Standard" title="blog-standard" />
      <Blogstandard standardblogs={standardblogs}/>

      <div>
        


      

       
      </div>
      <Footer />
    </div>
  );
}
