import React from "react";

const options = { day: "numeric", month: "short", year: "numeric" };

const LastTransections = ({ ads }) => {
  console.log(ads);
  return (
    <>
      <div className="TopHead">Last Transactions</div>
      <div id="AdmainCont">
        <div id="LastTcont1">
          {ads?.length > 0 ? (
            ads?.map((item) => (
              <div className="ADrow" key={item._id}>
                <div>
                  {new Date(item.createdAt).toLocaleDateString(
                    "en-IN",
                    options
                  ) +
                    " - " +
                    new Date(item.createdAt).toLocaleTimeString("en-IN", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                </div>
                <div>{item?.transactionId}</div>
                <div>
                  RS{" "}
                  {new Intl.NumberFormat("en-IN", {
                    maximumFractionDigits: 0,
                  }).format(item?.price)}
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", margin: "40px 0" }}>
              No Transaction Found!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default LastTransections;
