import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import React from 'react'

function Login() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
        <Card className="h-[400px] w-[500px] bg-gray-800">
            <CardHeader>
                <CardTitle className="text-white text-2xl">Login</CardTitle>
                <CardDescription className="text-base">Enter your email below to login to your account.</CardDescription>
                <CardAction className="text-white">Card Action</CardAction>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
                <label className="text-white">Email</label>
                <Input className="h-10" placeholder="abc@gmail.com"/>
                <label className="text-white">Password</label>
                <Input className="h-10" placeholder="********"/>
                <Button className="mt-2" variant="destructive">Login</Button>
            </CardContent>
            <CardFooter className="text-white flex justify-between">
                <p>Forget Password?</p>
                <p>Need an account? <label className="hover:text-red-600">SignUp</label></p>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Login