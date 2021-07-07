import { Button, Checkbox, Form, InputNumber, Select } from "antd";
import { TreeNode } from "rc-tree-select";
import React, { useEffect, useMemo } from "react";
import {
  BuildsFiltersParams,
  buildsOrderByOptions,
} from "../../core/api/builds/models";
import { pcPartsService } from "../../core/api/pcParts/pcPartsService";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { setSelectedFilters } from "../../core/store/slices/filters/filtersSlice";
import { FiltersTreeSelect, InlineFormItem, InlineSeparator } from "./styles";

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
    dispatch(setSelectedFilters({ ...data }));
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
      <InlineFormItem name="minPrice">
        <InputNumber min={filters.minPrice} />
      </InlineFormItem>
      <InlineSeparator>-</InlineSeparator>
      <InlineFormItem name="maxPrice">
        <InputNumber max={filters.maxPrice} />
      </InlineFormItem>
      <Form.Item name="orderBy">
        <Select
          defaultValue={buildsOrderByOptions[0].value}
          placeholder="Sortuj"
          options={buildsOrderByOptions}
        />
      </Form.Item>
      <Form.Item name="processorIds">
        <FiltersTreeSelect placeholder="Procesory" allowClear multiple>
          {filters.processors.map((g) => (
            <TreeNode
              key={g.brand}
              value={g.brand}
              title={g.brand}
              selectable={false}
            >
              {g.products.map((p) => (
                <TreeNode key={p.id} value={p.id} title={p.name} isLeaf />
              ))}
            </TreeNode>
          ))}
        </FiltersTreeSelect>
      </Form.Item>
      <div>RAM:</div>
      <Form.Item name="ramCapacities">
        <Checkbox.Group options={ramOptions} />
      </Form.Item>
      <Form.Item name="graphicsCardIds">
        <FiltersTreeSelect placeholder="Karty graficzne" allowClear multiple>
          {filters.graphicsCards.map((g) => (
            <TreeNode
              key={g.brand}
              value={g.brand}
              title={g.brand}
              selectable={false}
            >
              {g.products.map((p) => (
                <TreeNode key={p.id} value={p.id} title={p.name} isLeaf />
              ))}
            </TreeNode>
          ))}
        </FiltersTreeSelect>
      </Form.Item>
      <div>Dyski:</div>
      <Form.Item name="storageCapacities">
        <Checkbox.Group options={storageOptions} />
      </Form.Item>
      <Form.Item name="caseIds">
        <FiltersTreeSelect placeholder="Obudowy" allowClear multiple>
          {filters.cases.map((g) => (
            <TreeNode
              key={g.brand}
              value={g.brand}
              title={g.brand}
              selectable={false}
            >
              {g.products.map((p) => (
                <TreeNode key={p.id} value={p.id} title={p.name} isLeaf />
              ))}
            </TreeNode>
          ))}
        </FiltersTreeSelect>
      </Form.Item>
    </Form>
  );
};

export default BuildsListFilters;
