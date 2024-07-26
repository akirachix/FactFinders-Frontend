import "./index.css"

const Rewards = () => {

  const tableData = [
    { donorId: "1", donorName: "Eshe Aziz", itemsDonated: 23, pointsAwarded: '2300pts' },
    { donorId: "2", donorName: "Daisy Chepkirui", itemsDonated: 50, pointsAwarded: '7000pts' },
    { donorId: "3", donorName: "Edna Kesa", itemsDonated: 45, pointsAwarded: '7000pts' },
    { donorId: "4", donorName: "Kame Bashuna", itemsDonated: 56, pointsAwarded: '4300pts' },
    { donorId: "5", donorName: "Faith Ndanu", itemsDonated: 34, pointsAwarded: '2300pts' },
    { donorId: "6", donorName: "Linet Mkandoe", itemsDonated: 39, pointsAwarded: '3900pts' },
    { donorId: "7", donorName: "Karen Chepng'etich", itemsDonated: 70, pointsAwarded: '8000pts' },
    { donorId: "8", donorName: "Faith Mutava", itemsDonated: 90, pointsAwarded: '10000pts' },
    { donorId: "9", donorName: "Mercy Kantai", itemsDonated: 26, pointsAwarded: '2800pts' },
    { donorId: "10", donorName: "Akwang Deu", itemsDonated: 16, pointsAwarded: '1300pts' },

  ];
    return(
    <div className="reward-points">
      <h1>Rewards and Points</h1>
       <table className="rewards-table">
            <thead>
              <tr>
                <th>Donor ID</th>
                <th>Donor Name</th>
                <th>Items Donated</th>
                <th>Points Awarded</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.donorId}</td>
                  <td>{row.donorName}</td>
                  <td>{row.itemsDonated}</td>
                  <td>{row.pointsAwarded}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
    )
}

export default Rewards;