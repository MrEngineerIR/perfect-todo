import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { validateSession } from "@/utilites/auth";
import SideBar from "@/components/SideBar";
import Board from "@/models/Board";
import BoardComponent from "@/components/Board";
const AccountPage = async ({ searchParams }: { searchParams: any }) => {
  const session = cookies().get("auth");
  if (!session || !searchParams.user) {
    redirect("/?mode=signin");
  }
  const userId = await validateSession(session.value, searchParams.user);
  if (!userId) {
    redirect("/?mode=signin");
  }

  const boards = await Board.find({ userId: userId });
  const formatedBoard = [];
  for (const board of boards) {
    const newboard = {
      _id: JSON.parse(JSON.stringify(board._id)),
      userId: board.userId,
      label: board.label,
    };
    formatedBoard.push(newboard);
  }
  return (
    <div className="flex">
      <SideBar boards={formatedBoard} userId={userId} />
      <BoardComponent />
    </div>
  );
};

export default AccountPage;
