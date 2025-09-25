import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Target, 
  ArrowUpRight, 
  ArrowDownRight,
  User,
  LogOut,
  Bell
} from "lucide-react";

const Dashboard = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const portfolioValue = 125750;
  const totalReturn = 18.5;
  const monthlyReturn = 2.3;

  const investmentPackages = [
    {
      id: "1",
      name: "Conservative Growth",
      description: "Low-risk investment with steady returns",
      minimumInvestment: 1000,
      expectedReturn: "8-12%",
      riskLevel: "Low",
      duration: "12 months",
      currentInvestors: 1247,
      totalFunds: 15600000,
      performance: 9.2,
      color: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      id: "2", 
      name: "Balanced Portfolio",
      description: "Moderate risk with balanced growth potential",
      minimumInvestment: 5000,
      expectedReturn: "12-18%",
      riskLevel: "Medium",
      duration: "18 months",
      currentInvestors: 892,
      totalFunds: 28900000,
      performance: 15.7,
      color: "bg-gradient-to-br from-blue-500 to-cyan-600"
    },
    {
      id: "3",
      name: "High Yield Premium",
      description: "High-risk, high-reward investment opportunity",
      minimumInvestment: 10000,
      expectedReturn: "20-35%",
      riskLevel: "High", 
      duration: "24 months",
      currentInvestors: 456,
      totalFunds: 42300000,
      performance: 28.4,
      color: "bg-gradient-to-br from-purple-500 to-pink-600"
    }
  ];

  const myInvestments = [
    { package: "Conservative Growth", amount: 15000, return: 12.5, status: "Active" },
    { package: "Balanced Portfolio", amount: 25000, return: 18.2, status: "Active" },
    { package: "High Yield Premium", amount: 50000, return: 31.8, status: "Maturing" }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low": return "text-green-600 bg-green-50";
      case "Medium": return "text-blue-600 bg-blue-50";
      case "High": return "text-purple-600 bg-purple-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <PieChart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                InvestPro
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Portfolio Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">${portfolioValue.toLocaleString()}</p>
                  <div className="flex items-center space-x-1 text-sm text-green-600">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>+{totalReturn}%</span>
                  </div>
                </div>
                <DollarSign className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Return</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">+{monthlyReturn}%</p>
                  <p className="text-sm text-muted-foreground">Last 30 days</p>
                </div>
                <TrendingUp className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Investments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{myInvestments.length}</p>
                  <p className="text-sm text-muted-foreground">Packages</p>
                </div>
                <Target className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="packages" className="space-y-6">
          <TabsList className="bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="packages">Investment Packages</TabsTrigger>
            <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          </TabsList>

          <TabsContent value="packages" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investmentPackages.map((pkg) => (
                <Card key={pkg.id} className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-full h-24 ${pkg.color} rounded-lg mb-4 flex items-center justify-center`}>
                      <PieChart className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-lg">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Expected Return</span>
                      <Badge variant="secondary" className="bg-green-50 text-green-700">
                        {pkg.expectedReturn}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Risk Level</span>
                      <Badge className={getRiskColor(pkg.riskLevel)}>
                        {pkg.riskLevel}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Min. Investment</span>
                      <span className="font-semibold">${pkg.minimumInvestment.toLocaleString()}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Performance</span>
                        <span className="font-semibold text-green-600">+{pkg.performance}%</span>
                      </div>
                      <Progress value={pkg.performance} className="h-2" />
                    </div>
                    
                    <div className="pt-2 space-y-2">
                      <div className="text-xs text-muted-foreground">
                        {pkg.currentInvestors} investors • ${(pkg.totalFunds / 1000000).toFixed(1)}M total
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary-hover hover:to-purple-700"
                        onClick={() => setSelectedPackage(pkg.id)}
                      >
                        Invest Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-white/20 shadow-lg">
              <CardHeader>
                <CardTitle>My Active Investments</CardTitle>
                <CardDescription>Track your current investment performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myInvestments.map((investment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-lg">
                      <div>
                        <h3 className="font-semibold">{investment.package}</h3>
                        <p className="text-sm text-muted-foreground">${investment.amount.toLocaleString()} invested</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2">
                          <ArrowUpRight className="w-4 h-4 text-green-600" />
                          <span className="font-semibold text-green-600">+{investment.return}%</span>
                        </div>
                        <Badge variant={investment.status === "Active" ? "default" : "secondary"} className="mt-1">
                          {investment.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;