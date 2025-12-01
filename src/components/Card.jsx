function Card({ title, amount }) {
    return ( 
        <div className="bg-white p-4 rounded-xl shadow flex flex-col items-start">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-bold">{amount}</h3>
    </div>
     );
}

export default Card;