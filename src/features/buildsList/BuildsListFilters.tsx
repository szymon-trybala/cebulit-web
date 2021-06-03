import { Button, Checkbox, Form, InputNumber } from "antd";
import { TreeNode } from "rc-tree-select";
import React, { useEffect, useMemo } from "react";
import { BuildsFiltersParams } from "../../core/api/builds/models";
import { pcPartsService } from "../../core/api/pcParts/pcPartsService";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { FiltersTreeSelect } from "./styles";

const BuildsListFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((x) => x.filtersSlice.availableFilters);

  const ramOptions = useMemo(() => {
    if (!filters) return undefined;
    return filters.ramCapacities.map((x) => {
      const option = {
        label: `${x} GB`,
        value: x,
      };
      return option;
    });
  }, [filters]);

  const storageOptions = useMemo(() => {
    if (!filters) return undefined;
    return filters.storageCapacities.map((x) => {
      const option = {
        label: `${x} GB`,
        value: x,
      };
      return option;
    });
  }, [filters]);

  useEffect(() => {
    dispatch(pcPartsService.getAvailableFilters());
  }, [dispatch]);

  const [form] = Form.useForm<BuildsFiltersParams>();

  const onSubmit = (data: BuildsFiltersParams) => {
    console.log(data);
  };

  if (!filters) return null;

  return (
    <Form form={form} onFinish={onSubmit} layout="horizontal">
      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Filtruj
        </Button>
      </Form.Item>
      <div>Cena:</div>
      <Form.Item
        name="minPrice"
        style={{
          display: "inline-block",
          width: "calc(50% - 12px)",
          marginBottom: 0,
        }}
      >
        <InputNumber min={filters.minPrice} max={filters.maxPrice} />
      </Form.Item>
      <span
        style={{
          display: "inline-block",
          width: "24px",
          lineHeight: "32px",
          textAlign: "center",
        }}
      >
        -
      </span>
      <Form.Item
        name="maxPrice"
        style={{ display: "inline-block", width: "calc(50% - 12px)" }}
      >
        <InputNumber min={filters.minPrice} max={filters.maxPrice} />
      </Form.Item>
      <Form.Item name="processors">
        <FiltersTreeSelect placeholder="Procesory" allowClear multiple>
          {filters.processors.map((g) => (
            <TreeNode
              key={g.brand}
              value={g.brand}
              title={g.brand}
              selectable={false}
            >
              {g.products.map((p) => (
                <TreeNode key={p} value={p} title={p} isLeaf />
              ))}
            </TreeNode>
          ))}
        </FiltersTreeSelect>
      </Form.Item>
      <div>RAM:</div>
      <Form.Item name="ramCapacities">
        <Checkbox.Group options={ramOptions} />
      </Form.Item>
      <Form.Item name="graphicsCards">
        <FiltersTreeSelect placeholder="Karty graficzne" allowClear multiple>
          {filters.graphicsCards.map((g) => (
            <TreeNode
              key={g.brand}
              value={g.brand}
              title={g.brand}
              selectable={false}
            >
              {g.products.map((p) => (
                <TreeNode key={p} value={p} title={p} isLeaf />
              ))}
            </TreeNode>
          ))}
        </FiltersTreeSelect>
      </Form.Item>
      <div>Dyski:</div>
      <Form.Item name="storageCapacities">
        <Checkbox.Group options={storageOptions} />
      </Form.Item>
      <Form.Item name="cases">
        <FiltersTreeSelect placeholder="Obudowy" allowClear multiple>
          {filters.cases.map((g) => (
            <TreeNode
              key={g.brand}
              value={g.brand}
              title={g.brand}
              selectable={false}
            >
              {g.products.map((p) => (
                <TreeNode key={p} value={p} title={p} isLeaf />
              ))}
            </TreeNode>
          ))}
        </FiltersTreeSelect>
      </Form.Item>
    </Form>
  );
};

export default BuildsListFilters;
