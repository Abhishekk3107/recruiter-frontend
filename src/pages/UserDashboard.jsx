
import { LogOut, User, Briefcase } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
  };
  const isUser = localStorage.getItem("role") === "user";
  return (
    <div className="min-h-screen min-w-screen bg-gray-50 px-4 py-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gray-800 text-white p-2 rounded-full mr-3">
                {isUser ? <User className="h-5 w-5" /> : <Briefcase className="h-5 w-5" />}
              </div>
              <div>
              <p className="text-sm text-gray-500">
                  Welcome to,
                </p>
                <h1 className="text-xl font-semibold text-gray-800">
                  {isUser ? "User Dashboard" : "Recruiter Dashboard"}
                </h1>
                
              </div>
            </div>
            <form
              action={() => {
                logout()
                navigate("/")
              }}
            >
              <button
                type="submit"
                variant="outline"
                className="flex items-center gap-2 transition-all duration-200 hover:bg-gray-100"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </form>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-fade-in"></div>
        </main>
      </div>
    </div>
  );
}
