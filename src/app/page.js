import CardActionComponent from "@/components/CardActionComponent";
import CardAnimeComponent from "@/components/CardAnimeComponent";
import CardComponent from "@/components/CardComponent";
import CardDramaComponent from "@/components/CardDramaComponent";
import CardHollywoodComponent from "@/components/CardHollywoodComponent";
import CardScienceFictionComponent from "@/components/CardScienceFictionComponent";

export default function Home() {
  return (
    <main className=" bg-amber-950">
      <div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1562155847-c05f7386b204?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      <h1 className="ml-10 text-white text-2xl mb-5 font-bold mt-5">
        All Movie test update &nbsp;&nbsp;&#62;
      </h1>
      <CardComponent />
      <h1 className="ml-10 text-white text-2xl mb-5 font-bold mt-5">
        Action update Movie &nbsp;&nbsp;&#62;
      </h1>
      <CardActionComponent />
      <h1 className="ml-10 text-white text-2xl mb-5 font-bold mt-5">
        Drama Movie &nbsp;&nbsp;&#62;
      </h1>
      <CardDramaComponent />
      <h1 className="ml-10 text-white text-2xl mb-5 font-bold mt-5">
        Science Fiction Movie &nbsp;&nbsp;&#62;
      </h1>
      <CardScienceFictionComponent />
      <h1 className="ml-10 text-white text-2xl mb-5 font-bold mt-5">
        Hollywood Movie &nbsp;&nbsp;&#62;
      </h1>
      <CardHollywoodComponent />
      <h1 className="ml-10 text-white text-2xl mb-5 font-bold mt-5">
        Anime Movie &nbsp;&nbsp;&#62;
      </h1>
      <CardAnimeComponent />
    </main>
  );
}
