import { SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";
import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home(){
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        <Header/>
        {/* <SignedOut>
          <SignUpButton/>
        </SignedOut>
        <SignedIn>
          <SignOutButton/>
        </SignedIn> */}
        <div className="grid grid-vols-1 lg:grid-cols-2 gap-4">
          <EditorPanel/>
          <OutputPanel/>
        </div>
      </div>
    </div>
  )
}