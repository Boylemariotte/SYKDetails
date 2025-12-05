import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (!isCartOpen) return null;

    const handleWhatsAppCheckout = () => {
        const phoneNumber = "573107844522"; // Updated with user provided number

        let message = "Hola! Me gustaría hacer un pedido:\n\n";
        cartItems.forEach(item => {
            // Construct full image URL
            const imageUrl = window.location.origin + item.image;

            message += `- ${item.name} x${item.quantity}: $${(parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity).toLocaleString()}\n`;
            message += `  Imagen: ${imageUrl}\n`;
        });
        message += `\n*Total: $${cartTotal.toLocaleString()}*`;

        const encodedMessage = encodeURIComponent(message);
        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, '_blank');
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={toggleCart}></div>

            <div className="fixed inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 bg-[var(--color-rich-black)] border-l border-[var(--color-gold-metallic)] shadow-xl flex flex-col h-full">

                    {/* Header */}
                    <div className="px-4 py-6 sm:px-6 border-b border-[var(--color-charcoal-gray)] flex justify-between items-center">
                        <h2 className="text-lg font-medium text-[var(--color-gold-metallic)]">Carrito de Compras</h2>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-white focus:outline-none"
                            onClick={toggleCart}
                        >
                            <span className="sr-only">Cerrar panel</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                        {cartItems.length === 0 ? (
                            <div className="text-center text-gray-400 mt-10">
                                <p>Tu carrito está vacío.</p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-[var(--color-charcoal-gray)]">
                                {cartItems.map((item) => (
                                    <li key={item.id} className="py-6 flex">
                                        <div className="flex-shrink-0 w-24 h-24 border border-[var(--color-charcoal-gray)] rounded-md overflow-hidden">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-center object-cover"
                                            />
                                        </div>

                                        <div className="ml-4 flex-1 flex flex-col">
                                            <div>
                                                <div className="flex justify-between text-base font-medium text-white">
                                                    <h3>{item.name}</h3>
                                                    <p className="ml-4">{item.price}</p>
                                                </div>
                                            </div>
                                            <div className="flex-1 flex items-end justify-between text-sm">
                                                <div className="flex items-center border border-[var(--color-charcoal-gray)] rounded">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="px-2 py-1 text-gray-400 hover:text-white"
                                                    >-</button>
                                                    <span className="px-2 text-white">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="px-2 py-1 text-gray-400 hover:text-white"
                                                    >+</button>
                                                </div>

                                                <button
                                                    type="button"
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="font-medium text-[var(--color-gold-metallic)] hover:text-[var(--color-pale-gold)]"
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Footer */}
                    {cartItems.length > 0 && (
                        <div className="border-t border-[var(--color-charcoal-gray)] px-4 py-6 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-white mb-4">
                                <p>Subtotal</p>
                                <p>${cartTotal.toLocaleString()}</p>
                            </div>
                            <p className="mt-0.5 text-sm text-gray-400 mb-6">
                                El envío y los impuestos se calculan al finalizar la compra.
                            </p>
                            <button
                                onClick={handleWhatsAppCheckout}
                                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-black bg-[var(--color-gold-metallic)] hover:bg-[var(--color-pale-gold)] transition-colors duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Enviar Pedido por WhatsApp
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
