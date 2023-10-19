import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../@/components/ui/table"
import { usergetfunc } from '../../../Services/user-api-call';



const MemberTable = () => {


    const [userdata, setUserData] = useState([]);
    // get user
    const userGet = async () => {
        const response = await usergetfunc(search, gender, sort, page);
        if (response.status === 200) {

            setUserData(response.data.usersdata);
            // setPageCount(response.data.Pagination.pageCount)
        } else {
            console.log("error for get user data")
        }
    }
    return (
        <Table className='w-full'>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader className='w-full'>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className='w-full border-2'>
                <TableRow className='w-full border-2'>
                    <TableCell className="font-medium border-2">INV001</TableCell>
                    <TableCell className="border-2">Paid</TableCell>
                    <TableCell className="border-2">Credit Card</TableCell>
                    <TableCell className="border-2">$250.00</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}

export default MemberTable