import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge";
  import Link from "next/link";
  import datas from "@/db/data";
  import { ModeToggle } from "@/components/ToogleTheme";
  
  const getData = async () => {
    await new Promise((resolve: any) => setTimeout(resolve, 3000));
  
    return true;
  };
  
  export default async function Home() {
    const tes = await getData();
  
    return (
      <div className="w-full mx-auto py-10">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-semibold">Kumpulan Resep Masakan</h1>
          <ModeToggle />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-4">
          {datas.map((data: any) => (
            <Card key={data.id} className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{data.judul}</CardTitle>
                    <CardDescription>
                      Waktu masak {data.waktu} menit
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{data.deskripsi}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <Button asChild size="sm">
                  <Link href="/">Lihat</Link>
                </Button>
                {data.favorite && <Badge variant="outline">Top</Badge>}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  