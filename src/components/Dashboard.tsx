import React, { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  TrendingUp, 
  TrendingDown, 
  IndianRupee, 
  Calendar,
  Target,
  CreditCard,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { NavigationContext } from "../App";

// Simple Progress component to avoid dependency issues
function SimpleProgress({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
      <div 
        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      ></div>
    </div>
  );
}

const savingsGoals = [
  {
    id: 1,
    title: "Emergency Fund",
    target: 50000,
    current: 32500,
    monthlyDeposit: 2500,
    bank: "SBI",
    progress: 65
  },
  {
    id: 2,
    title: "Festival Shopping",
    target: 25000,
    current: 18200,
    monthlyDeposit: 1500,
    bank: "HDFC",
    progress: 73
  }
];

const activeLoans = [
  {
    id: 1,
    lender: "Union Bank",
    originalAmount: 50000,
    outstanding: 28500,
    lastPayment: "₹100 • 2 days ago",
    nextPayment: "₹100 • Tomorrow",
    progress: 43
  }
];

const recentTransactions = [
  { type: "deposit", amount: 100, description: "Daily RD - Emergency Fund", time: "2 hours ago", bank: "SBI" },
  { type: "repayment", amount: 100, description: "Loan repayment", time: "1 day ago", bank: "Union Bank" },
  { type: "deposit", amount: 50, description: "Daily RD - Festival Shopping", time: "1 day ago", bank: "HDFC" },
  { type: "repayment", amount: 150, description: "Extra loan payment", time: "2 days ago", bank: "Union Bank" },
  { type: "deposit", amount: 100, description: "Daily RD - Emergency Fund", time: "3 days ago", bank: "SBI" }
];

export function Dashboard() {
  const { setNavigation } = useContext(NavigationContext);

  const handleNewGoal = () => {
    alert("Create new savings goal functionality would open here. This is a demo version.");
  };

  const handleMakePayment = () => {
    alert("Make payment functionality would open here. This is a demo version.");
  };

  const handleAddSavingsGoal = () => {
    alert("Add new savings goal form would open here.");
  };

  const handleMakeLoanPayment = () => {
    alert("Loan payment interface would open here.");
  };

  const handleViewLoanDetails = () => {
    alert("Detailed loan information would be displayed here.");
  };

  const handleViewAllTransactions = () => {
    alert("Complete transaction history would be displayed here.");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Your Dashboard</h2>
            <p className="text-gray-600 mt-1">Track your savings and repayments</p>
          </div>
          <div className="flex gap-3 mt-4 sm:mt-0">
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={handleNewGoal}
            >
              <Plus className="size-4 mr-2" />
              New Goal
            </Button>
            <Button 
              variant="outline"
              onClick={handleMakePayment}
            >
              Make Payment
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Savings</p>
                <p className="text-2xl font-bold text-green-600">₹50,700</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <ArrowUpRight className="size-3 mr-1" />
                  +₹150 today
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="size-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Outstanding Loans</p>
                <p className="text-2xl font-bold text-red-600">₹28,500</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <ArrowDownRight className="size-3 mr-1" />
                  -₹100 today
                </p>
              </div>
              <div className="p-3 bg-red-100 rounded-lg">
                <TrendingDown className="size-6 text-red-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">This Month</p>
                <p className="text-2xl font-bold text-blue-600">₹4,200</p>
                <p className="text-xs text-gray-600 mt-1">Saved + Repaid</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="size-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Credit Score</p>
                <p className="text-2xl font-bold text-orange-600">685</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <ArrowUpRight className="size-3 mr-1" />
                  +15 this month
                </p>
              </div>
              <div className="p-3 bg-orange-100 rounded-lg">
                <Target className="size-6 text-orange-600" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Savings Goals */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="size-5 text-green-600" />
                  Savings Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {savingsGoals.map((goal) => (
                  <div key={goal.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{goal.title}</h4>
                        <p className="text-sm text-gray-600">{goal.bank} RD • ₹{goal.monthlyDeposit}/month</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-600">
                          ₹{goal.current.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          of ₹{goal.target.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{goal.progress}% completed</span>
                        <span className="text-gray-600">
                          ₹{(goal.target - goal.current).toLocaleString()} remaining
                        </span>
                      </div>
                      <SimpleProgress value={goal.progress} />
                    </div>
                  </div>
                ))}
                
                <Button 
                  variant="outline" 
                  className="w-full border-dashed"
                  onClick={handleAddSavingsGoal}
                >
                  <Plus className="size-4 mr-2" />
                  Add New Savings Goal
                </Button>
              </CardContent>
            </Card>

            {/* Active Loans */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="size-5 text-blue-600" />
                  Active Loan Repayments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {activeLoans.map((loan) => (
                  <div key={loan.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{loan.lender}</h4>
                        <p className="text-sm text-gray-600">Last: {loan.lastPayment}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-red-600">
                          ₹{loan.outstanding.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">
                          of ₹{loan.originalAmount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{loan.progress}% repaid</span>
                        <span className="text-green-600">Next: {loan.nextPayment}</span>
                      </div>
                      <SimpleProgress value={100 - loan.progress} />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={handleMakeLoanPayment}
                      >
                        Make Payment
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={handleViewLoanDetails}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Transactions */}
          <div>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center gap-3 py-2">
                      <div className={`p-2 rounded-lg flex-shrink-0 ${
                        transaction.type === 'deposit' 
                          ? 'bg-green-100' 
                          : 'bg-blue-100'
                      }`}>
                        {transaction.type === 'deposit' ? (
                          <ArrowUpRight className="size-4 text-green-600" />
                        ) : (
                          <ArrowDownRight className="size-4 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {transaction.description}
                        </p>
                        <p className="text-xs text-gray-600">
                          {transaction.bank} • {transaction.time}
                        </p>
                      </div>
                      <div className={`font-semibold ${
                        transaction.type === 'deposit' 
                          ? 'text-green-600' 
                          : 'text-blue-600'
                      }`}>
                        {transaction.type === 'deposit' ? '+' : '-'}₹{transaction.amount}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-4" 
                  size="sm"
                  onClick={handleViewAllTransactions}
                >
                  View All Transactions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}