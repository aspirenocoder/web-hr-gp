// import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";

const Home = () => {
  const navigate = useNavigate();

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchInput, setSearchInput] = useState("");
  const [filteredSubheadings, setFilteredSubheadings] = useState([]);
  const [searchResultOpen, setSearchResultOpen] = useState(false);
  const [formsComponentToRender, setFormsComponentToRender] = useState(false);
  const [contentToRender, setContentToRender] = useState(true);
  const [htmlContent, setHtmlContent] = useState("");

  // const [orgHTMLContent, setOrgHTMLContent] = useState(null);
  const downloadableForms = [
    "Cash Voucher-Factory",
    "C-Off Form",
    "Induction Checklist",
    "Insurance Coverage Form",
    "Joining Form",
    "Leave Application",
    "Leave Card",
    "Loan Form",
    "No Due Form - Front Line",
    "No Due Form",
    "On Duty Slip",
    "Permission Slip",
    "Salary Advance Form",
    "Travel Advance Requisition",
    "Travel Expenses Track Sheet",
    "Travel Expensive Format",
    "Manpower Requisition Form",
  ];

  useEffect(() => {
    if (htmlContent === "") {
      fetch(`/About Gourmet Popcornica LLP.html`)
        .then((response) => response.text())
        .then((data) => setHtmlContent(data))
        .catch((error) => console.error("Error loading HTML:", error));
    }

    document.title = "Gourmet Popcornica";
    const handleDocumentClick = (event) => {
      const searchResultContainer = document.querySelector(".search-result");
      if (
        searchResultOpen &&
        searchResultContainer &&
        !document.querySelector(".search-result").contains(event.target)
      ) {
        setSearchResultOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [searchResultOpen,htmlContent]);

  const [isSideBarOpen, setIsSideBarOpen] = useState(
    window.innerWidth < 620 ? false : true
  );
  // const [contentState, setContentState] = useState("");
  const [isActive, setIsActive] = useState(
    window.innerWidth < 620 ? false : true
  );
  // const [subheadingName, setSubheadingName] = useState("");
  // const [isSelected, setSelected] = useState(null);

  const dropdownsState = [
    {
      heading: {
        title: "General",
        subheadings: [
          "About Gourmet Popcornica LLP",
          "Vision",
          "Mission",
          "Values",
          "Introduction",
          "Definitions",
          "Equal Opportunity",
          "Terms of Employment",
          "Confidentiality",
        ],
      },
    },
    {
      heading: {
        title: "Code Of Conduct, Ethics & Disciplinary Action",
        subheadings: [
          "Protection & Proper Use Of Assets",
          "Drugs Alcohol Smoking Weapons",
          "Grooming Standards",
          "Conduct Rules",
          "Rules on Disciplinary Action - Purpose & Scope",
          "Disciplinary Procedure",
          "Warning Process",
          "Receiving and Giving Gifts",
          "Annual Conflict of Interest",
        ],
      },
    },
   
    {
      heading: {
        title: "Recruitment and Selection Policy",
        subheadings: [
          "Purpose",
          "Scope",
          "Manpower Requisition",
          "Sources of Recruitment",
          "Recruitment Process",
          "Screening of Applications",
          "Interview Panel",
          "Interview & Selection Process",
          "Final Selection",
          "Conveyance reimbursements for Candidates",
          "Internship"
          
        ],
      },
    },
    {
      heading: {
        title: "New Employee Onboarding Policy",
        subheadings: [
          "Onboarding Policy - Purpose",
          // "Scope",
          // "Definitions",
          // "Complaints Procedure",
          // "Redressal Process",
          // "Internal Complaints Committee",
          "Probation and Confirmation - Purpose",
          "Probation and Confirmation - Definitions",
          "Probation Procedure",
          "Notice Period",
          "Termination of Services",
          "Assessment",
          "Confirmation",
          "Confirmation Procedure"
        ],
      },
    },
    // {
    //   heading: {
    //     title: "Probation and Confirmation Policy",
    //     subheadings: [
    //       "Probation and Confirmation - Purpose",
    //       "Probation and Confirmation - Definitions",
    //       "Probation Procedure",
    //       "Notice Period",
    //       "Termination of Services",
    //       "Assessment",
    //       "Confirmation",
    //       "Confirmation Procedure"
    //     ],
    //   },
    // },
    {
      heading: {
        title: "Leave & Attendance",
        subheadings: [
          "Office Hours",
          "Permission",
          "On Duty",
          // "Procedure For Granting Leave",
          "Kinds of Leave",
          "Public Holidays And Restricted Holidays",
          // "Leave Administration",
        ],
      },
    },
    {
      heading: {
        title: "Travel And Conveyance",
        subheadings: [
          "Travel And Conveyance - Purpose",
          "Classification of Cities",
          "Travel And Conveyance - General Guidelines",
          "Mode And Class Of Travel",
          "Local Travel",
          "Food Allowance during Official Travel",
          "Accommodation & Lodging",
        ],
      },
    },
    

    {
      heading: {
        title: "Food, Fuel and Vehicle Maintenance Allowance Policy",
        subheadings: [
          "Vehicle Maintenance - Purpose",
          "Terms & Conditions - Vehicle Maintenance",
          "Eligibility",
          "Eligibility for Oil Palm",
          "Daily Food Allowance - Purpose",
          "Daily Food Allowance - General Guidelines",

        ],
      },
    },
    {
      heading: {
        title: "Performance Management System Policy",
        subheadings: [
          "Performance Management - Purpose",
          "Performance Management - Definitions",
          "Performance Management - General Guidelines",
          "Performance Management - Eligibility Criteria",
          "Performance Management System Process Flow",
          "Annual Business Plan and Projection",
          "Behavioural Competencies",
          "Roles and Responsibilities",
          "Escalation Process",
          "Normalization of Appraisal Ratings",
          "Performance Improvement Plan"
          
        ],
      },
    },
    
    {
      heading: {
        title: "Sexual Harassment Policy",
        subheadings: [
          "Harassment Policy - Objective",
          "Harassment Policy - Scope",
          "Harassment Policy - Definitions",
          "Complaints Redressal Procedure",
          "Receipt of Complaint",
          "Confidentiality and Support",
          "Investigation",
          "Communication & Followup",
          "Regular Review and Training",
          "Internal Complaints Committee",
          "Complaints made with a malicious intent",
          "Dissemination of the Policy"
        ],
      },
    },
    {
      heading: {
        title: "Information Technology (IT) Policy",
        subheadings: [
          "IT - Objective",
          "Terms & Conditions - Vehicle Maintenance",
          "Eligibility",
          "Eligibility for Oil Palm",
          "Daily Food Allowance - Purpose",
          "Daily Food Allowance - General Guidelines",
          "Loss or Damage",
          "Non-Company Employees"
        ],
      },
    }, 
    {
      heading: {
        title: "Compensation And Benefits",
        subheadings: [
          "Compensation And Benefits",
          "Pay Day & Pay Cycle",
          "Cost To The Company",
          "Tax Compliance",
          "Provident Fund",
          "Employee State Insurance",
          "Loan Policy",
          "Salary Advance Guidelines",
          "Medical Insurance Guidelines",
          "Marriage Gift Guidelines",
          "Children Higher Education Fund Policy"
        ],
      },
    },
    {
      heading: {
        title: "Training & Development Policy",
        subheadings: [
          "Training & Development Policy",
          "Objectives & Scope",
          "Types Of Training",
          "Mode & Process Of Training",
          "Training Plan",
        ],
      },
    },
    {
      heading: {
        title: "Safety, Health And Environment",
        subheadings: [
          "Safety, Health And Environment",
          "Legal Compliance",
          "Training & Awareness",
          "Personal Protective Equipment",
          "Work Injury Policy",
          "Policy Guidelines",
        ],
      },
    },
    {
      heading: {
        title: "Reward and Recognition Policy",
        subheadings: [
          "Reward and Recognition Policy",
          "Types of Rewards and Recognition",
          "Rewards & Recognition - Policy Guidelines",
          "Objective Evaluation",
          "Administration of the Policy",
          "Policy Implementation",
        ],
      },
    },
    {
      heading: {
        title: "Policy on Cellular SIM Cards",
        subheadings: [
          "Policy on Cellular SIM Cards - Objective",
          "Policy on Cellular SIM Cards - Eligibility",
          "Policy on Cellular SIM Cards - Process",
          "Policy on Cellular SIM Cards - Guidelines"
        ],
      },
    },
    // {
    //   heading: {
    //     title: "Performance Review",
    //     subheadings: [
    //       "Purpose",
    //       "Performance Scope",
    //       "general_guidelines_67",
    //       "Roles And Responsibilities",
    //       "Performance Management Process",
    //       "Policy Approving Authority",
    //     ],
    //   },
    // },

    // {
    //   heading: {
    //     title: "Termination Policy",
    //     subheadings: [
    //       "Objective & Scope",
    //       "Reasons For Termination",
    //       "Procedure",
    //     ],
    //   },
    // },
    {
      heading: {
        title: "Forms & Annexures",
        subheadings: [
          "Downloadable Forms",
          "Annexure 1",
          "Annexure 2.1",
          "Annexure 2.2",
          "Annexure 2.3",
          "Annexure 3.1",
          "Annexure 4.1",
          "Annexure 5.1",
          "Annexure 5.2",
          "Annexure 5.3",
          "Annexure 6.1",
          "Annexure 6.2",
          "Annexure 6.3",
          "Annexure 6.4",
          "Annexure 7.1",
          "Annexure 7.2",
          "Annexure 7.3",
          "Annexure 8.1",
          "Annexure 8.2",
          "Annexure 8.3",
          "Annexure 8.4",
          "Annexure 8.5",
          "Annexure 10.1",
          "Annexure 11.1",
          "Annexure 14.1",
          "Annexure 15.1"


        ],
      },
    },
  ];

  // const Dropdown = ({ id, label, items }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   console.log(isOpen);
  //   const handleToggle = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   const handleItemClick = (item) => {
  //     changeFile(item, label);
  //   };

  //   return (
  //     <div className="dropdown">
  //       <button
  //         onClick={handleToggle}
  //         className={`dropdown-button ${
  //           isOpen === true ? "changeFontColor" : ""
  //         } `}
  //       >
  //         {label}
  //       </button>
  //       <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
  //         {items.map((item, index) => (
  //           <div
  //             key={index}
  //             style={{ color: "#0d1430" }}
  //             className={`dropdown-item`}
  //             onClick={() => {
  //               handleItemClick(item);
  //             }}
  //           >
  //             {item}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const [openedDropdown, setOpenedDropdown] = useState("");
  const [openedDropdownitem, setOpenedDropdownitem] = useState("");

  const Dropdown = ({ id, label, items }) => {
    // const [dropdownOpenState, setDropdownOpenState] = useState({});

    // const isOpen = dropdownOpenState[id] || false;

    const handleToggle = (id) => {
      if (id === openedDropdown) {
        setOpenedDropdown(null);
        console.log(openedDropdown);
      } else {
        setOpenedDropdown(label);
      }
      // setDropdownOpenState({ ...dropdownOpenState, [id]: !isOpen }); // Update dropdown open state
    };

    const handleItemClick = (item) => {
      setOpenedDropdownitem(item);
      changeFile(item, label);
      if (window.innerWidth < 620) {
        setIsActive(!isActive);
        setIsSideBarOpen(!isSideBarOpen);
      }
    };

    return (
      <div className="dropdown">
        <button
          onClick={() => handleToggle(label)}
          className={`dropdown-button ${
            openedDropdown === label ? "changeFontColor" : ""
          } `}
        >
          {label}
        </button>
        <div
          className={`dropdown-content ${
            openedDropdown === label ? "open" : ""
          }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{ color: "#0d1430" }}
              className={`dropdown-item  ${
                openedDropdownitem === item ? "changeBgColor" : ""
              } `}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const downloadFile = (filename) => {
    // Path to the file in the public folder
    const filePath = process.env.PUBLIC_URL + filename + ".pdf";

    // Create a download link
    const downloadLink = document.createElement("a");

    // Set the download link's attributes
    downloadLink.href = filePath;
    downloadLink.download = filename;

    // Append the link to the body (required in some browsers)
    document.body.appendChild(downloadLink);

    // Trigger the click event on the link
    downloadLink.click();

    // Remove the link from the document
    document.body.removeChild(downloadLink);
  };

  const handleSearchInputChange = (e) => {
    setSearchResultOpen(true);
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter the subheadings based on the input value
    const filteredSubheadings = dropdownsState
      .flatMap((dropdown) => dropdown.heading.subheadings)
      .filter((subheading) =>
        subheading.toLowerCase().includes(inputValue.toLowerCase())
      );

    setFilteredSubheadings(filteredSubheadings);
  };

  const changeFile = (subheadingName, headingName) => {
    if (subheadingName === "Downloadable Forms") {
      setFormsComponentToRender(true);
      setContentToRender(false);
    } else {
      setContentToRender(true);
      setFormsComponentToRender(false);

      fetch(`/${subheadingName}.html`)
        .then((response) => response.text())
        .then((data) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, "text/html");
          const scripts = doc.getElementsByTagName("script");

          Array.from(scripts).forEach((script) => {
            const newScript = document.createElement("script");
            newScript.text = script.text;
            document.head.appendChild(newScript);
          });

          setHtmlContent(data);
        })
        .catch((error) => console.error("Error loading HTML:", error));
    }
  };

  window.changeFile = changeFile;

  const signout = () => {
    window.localStorage.removeItem("number");
    navigate("/signout", { replace: true });
  };

  const MenuIcon = ({ setIsSideBarOpen, isSideBarOpen }) => {
    const toggleClass = () => {
      setIsActive(!isActive);
      setIsSideBarOpen(!isSideBarOpen);
    };

    return (
      <div
        className={`bar-container ${isActive ? "change" : ""}`}
        onClick={() => toggleClass()}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="toggle-button">
          <MenuIcon
            setIsSideBarOpen={setIsSideBarOpen}
            isSideBarOpen={isSideBarOpen}
          />
        </div>

        <div className="detail">
          <img src={require("./assets/gp_logo.webp")} alt="gp-logo" className="logo" />
          <p className="emp">HR Manual</p>

          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              maxHeight: "100%",
            }}
          >
            <input
              className="search-bar"
              placeholder="Search policies"
              value={searchInput}
              // onBlur={() => setSearchResultOpen(false)}
              onFocus={() => {
                setSearchResultOpen(true);
              }}
              onChange={handleSearchInputChange}
            />
            {searchResultOpen && (
              <div className="search-result">
                {filteredSubheadings.map((subheading, index) => (
                  <div
                    key={index}
                    className={`dropdown-item search-r`}
                    onClick={() => {
                      changeFile(subheading);
                      setSearchResultOpen(false);
                    }}
                  >
                    {subheading}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div onClick={() => signout()}>
          <RiLogoutBoxRLine color="#fff" size={25} />
        </div>
      </header>

      <div className="Container">
        <div className={`sidebar ${isSideBarOpen ? "open" : "closed"}`}>
          {/* <IoCloseSharp
            className="close-button"
            onClick={() => toggleSidebar()}
            color="#fff"
            size={35}
          /> */}
          {dropdownsState.map((dropdown, index) => (
            <Dropdown
              key={index}
              label={dropdown.heading.title}
              items={dropdown.heading.subheadings}
            />
          ))}
        </div>
        <div
          className={`Content-container ${
            isSideBarOpen ? "content-open" : "content-closed"
          }`}
        >
          <div className="Chat-container">
            <div
              className="mobile-search"
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                maxHeight: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoIosSearch className="search-icon" color="#000" size={25} />
                <input
                  className="mobile-search-bar"
                  placeholder="Search policies"
                  value={searchInput}
                  // onBlur={() => setSearchResultOpen(false)}
                  onFocus={() => setSearchResultOpen(true)}
                  onChange={handleSearchInputChange}
                />
              </div>
              {searchResultOpen && (
                <div className="mobile-search-result">
                  {filteredSubheadings.map((subheading, index) => (
                    <div
                      key={index}
                      className={`dropdown-item search-r`}
                      onClick={() => {
                        changeFile(subheading);
                        setSearchResultOpen(false);
                      }}
                    >
                      {subheading}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {contentToRender && (
              <div
                className="custom-font"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></div>
            )}
            {formsComponentToRender && (
              <div className="mainFormsContainer">
                <div className="formsContainer">
                  {downloadableForms.map((item, index) => (
                    <div
                      key={index}
                      className="button"
                      onClick={() => {
                        downloadFile(item);
                      }}
                    >
                      <div className="button-wrapper">
                        <div className="text">
                          <p style={{ color: "#000" }}>{item}</p>
                        </div>
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="img"
                            width="2em"
                            height="2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                            ></path>
                          </svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
