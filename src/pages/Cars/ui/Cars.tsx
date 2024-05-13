import React from "react";
import { FilterBrand, FilterPrice, FilterSort } from "../../../widgets/filters";
import ListCars from "../../../widgets/listCars/ui/ListCars";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { fetchFilterCars } from "../../../entities/carblock/model/getFilterCars";
import { Search } from "../../../widgets/searchCars";
import "./cars.scss";

const Cars: React.FC = () => {
    const { items, status } = useAppSelector((state) => state.getFilterCars);
    const { sort, searchCars, price } = useAppSelector((state) => state.filters);
    const dispatch = useAppDispatch();

    const getCars = async () => {
        dispatch(fetchFilterCars({ sort, searchCars, price }));
    };

    React.useEffect(() => {
        getCars()
    }, [sort, searchCars, price]);

    return (
        <main>
            <div className="container">
                <div className="cars__inner">
                    <aside className="cars__filters">
                        <FilterPrice />
                        <FilterBrand />
                    </aside>
                    <div className="cars">
                        <FilterSort />
                        <Search />
                        <ListCars cars={items} status={status} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cars;