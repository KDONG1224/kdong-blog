/* eslint-disable prefer-const */
// base
import React, { useCallback, useEffect, useState } from 'react';

// style
import { StyledBannerManager } from './style';

// components
import { ImageBank } from 'components';

// modules
import {
  BannerTitleListProps,
  CreateMainBannerProps,
  MainBannerProps
} from 'modules';

// libraries
import { useForm } from 'antd/lib/form/Form';
import {
  Row,
  Col,
  Descriptions,
  Slider,
  InputNumber,
  Checkbox,
  Form,
  Input,
  Button
} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

interface BannerManagerProps {
  bannerData: MainBannerProps;
  onSubmit: (values: CreateMainBannerProps) => void;
}

export const BannerManager: React.FC<BannerManagerProps> = ({
  bannerData,
  onSubmit
}) => {
  const [playSpeed, setPlaySpeed] = useState<number>(1);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);

  const [form] = useForm();

  const handleSetSpeed = (value: number) => {
    setPlaySpeed(value);
  };

  const handleSetAutoPlay = (checked: boolean) => {
    setAutoPlay(checked);
  };

  const handleSetTitleSpeed = (key: number, speed: number) => {
    const titleLists = form.getFieldValue(
      'titleLists'
    ) as BannerTitleListProps[];

    let result = titleLists.filter((_, idx) => idx === key)[0];
    let not = titleLists.filter((_, idx) => idx !== key);

    result = {
      ...result,
      playSpeed: speed
    };

    form.setFieldsValue({
      titleLists: [...not, result].sort((a, b) => a.seq - b.seq)
    });
  };

  const handleRemoveTitle = (
    name: number,
    remove: (index: number | number[]) => void
  ) => {
    remove(name);

    const titleLists = form.getFieldValue(
      'titleLists'
    ) as BannerTitleListProps[];

    form.setFieldsValue({
      titleLists: titleLists.map((list, idx) => ({
        ...list,
        seq: idx + 1
      }))
    });
  };

  const handleInit = useCallback(() => {
    if (!bannerData) return;

    form.setFieldsValue({
      playSpeed: bannerData.playSpeed,
      autoPlay: bannerData.autoPlay,
      titleLists: bannerData.titleLists.map((list, idx) => ({
        ...list,
        seq: idx + 1
      }))
    });

    setAutoPlay(bannerData.autoPlay);
  }, [form, bannerData]);

  const onFinish = (values: CreateMainBannerProps) => {
    if (!onSubmit) return;

    onSubmit(values);
  };

  useEffect(() => {
    handleInit();
  }, [form, handleInit]);

  return (
    <StyledBannerManager
      form={form}
      id="admin-main-form"
      onFinish={(values) => onFinish(values as CreateMainBannerProps)}
    >
      <Row>
        <Col span={24}>
          <Descriptions size="small" column={24} layout="vertical" bordered>
            <Descriptions.Item
              label="배너 타이틀"
              span={24}
              className="banner-title"
            >
              <Row align="middle">
                <Col span={8}>
                  <p className="sub-title">타이틀</p>
                </Col>
                <Col span={16}>
                  <p className="sub-title">재생속도 (sec)</p>
                </Col>
              </Row>
              <Form.List name="titleLists">
                {(fields, { add, remove }) => {
                  const titleLists = fields.map((field, idx) => ({
                    ...field,
                    seq: idx + 1
                  }));

                  return (
                    <>
                      {titleLists.map(({ key, name, ...restField }) => (
                        <Row key={key}>
                          <Col span={8}>
                            <Form.Item name={[name, 'title']} {...restField}>
                              <Input placeholder="타이틀을 입력해주세요" />
                            </Form.Item>
                          </Col>
                          <Col span={14}>
                            <Form.Item
                              name={[name, 'playSpeed']}
                              {...restField}
                            >
                              <div className="banner-title-speed-box">
                                <Slider
                                  min={1}
                                  max={10}
                                  value={
                                    (form.getFieldValue('titleLists')[name] &&
                                      form.getFieldValue('titleLists')[name]
                                        .playSpeed) ||
                                    0
                                  }
                                  onChange={(e) =>
                                    handleSetTitleSpeed(name, e as number)
                                  }
                                />
                                <InputNumber
                                  disabled
                                  style={{ margin: '0 16px' }}
                                  value={
                                    (form.getFieldValue('titleLists')[name] &&
                                      form.getFieldValue('titleLists')[name]
                                        .playSpeed) ||
                                    0
                                  }
                                />
                              </div>
                            </Form.Item>
                          </Col>
                          <Col span={2}>
                            <div className="minus-icon">
                              <MinusCircleOutlined
                                onClick={() => handleRemoveTitle(name, remove)}
                              />
                            </div>
                          </Col>
                        </Row>
                      ))}
                      <Form.Item>
                        <Button
                          disabled={fields.length === 5}
                          onClick={() =>
                            add({
                              title: '',
                              playSpeed: 0,
                              seq: fields.length + 1
                            })
                          }
                          block
                          icon={<PlusOutlined />}
                          style={{ marginBottom: 10 }}
                        >
                          Add Title
                        </Button>
                      </Form.Item>
                    </>
                  );
                }}
              </Form.List>
            </Descriptions.Item>
            <Descriptions.Item label="배너 구성" span={24}>
              {bannerData && <ImageBank fileList={bannerData.fileList} />}
            </Descriptions.Item>
            <Descriptions.Item label="배너 옵션">
              <Row align="middle">
                <Col span={16}>
                  <p className="sub-title">재생속도 (sec)</p>
                </Col>
                <Col span={8}>
                  <p className="sub-title">자동재생 (autoplay)</p>
                </Col>
                <Col span={10}>
                  <Form.Item name="playSpeed">
                    <Slider
                      min={1}
                      max={20}
                      onChange={(value) => handleSetSpeed(value as number)}
                      value={playSpeed}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="playSpeed">
                    <InputNumber
                      min={1}
                      max={20}
                      style={{ margin: '0 16px' }}
                      onChange={(value) => handleSetSpeed(value as number)}
                      value={playSpeed}
                    />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item name="autoPlay">
                    <Checkbox
                      checked={autoPlay}
                      onChange={(value) =>
                        handleSetAutoPlay(value.target.checked)
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </StyledBannerManager>
  );
};
