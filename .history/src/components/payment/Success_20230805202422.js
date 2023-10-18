import React from "react"
import { Link } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import {clearCart, toggleBtnCart} from "../../redux/products/products.slice"
import { useSelector } from "react-redux"
export function Success() {
    const dispatch = useDispatch()
    const {cart} = useSelector(state => state.product)
    const handleFinish = () => {
        console.log(cart)
    }
    return (
        <div className="payment-page text-center m-5-auto flex justify-center">
            <div className="border-black w-max h-fit">
            <FontAwesomeIcon icon={faCircleCheck} className='text-7xl text-green-400'/>
            <h2 className="py-6">We will contact you as soon as possible to confirm your order.</h2>
            <button onclick={handleFinish()} className="text-2xl p-2 border-4 rounded-lg font-semibold">Finish</button>
            </div>
        </div>
    )
}
