import { createContext, useContext, useState } from "react";

export const DateContext = createContext({
    selectedDate: new Date(),
    setSelectedDate: () => {},
});

export const DateProvider = ({ children }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
            {children}
        </DateContext.Provider>
    );
};

export const useDate = () => useContext(DateContext);
