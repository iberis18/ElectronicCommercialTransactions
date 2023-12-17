import React, { useEffect, useState } from 'react';
import './Okpd2.sass';
import okpd2List from '../../handbooks/okpd_2.json';
import okpd2FormatedList from '../../handbooks/okpd_2_formated.json';

export const Okpd2 = (props) => {
  const [visible, setVisible] = useState([]);
  const [chooseValue, changeChooseValue] = useState('');
  const callback = props.parentCallback;
  const elementKey = props.elementKey;

  useEffect(() => {
    let tmp = [];
    okpd2List.map((item) => {
      item.parent_code === ''
        ? tmp[item.code] = true
        : tmp[item.code] = false;
    });
    setVisible(tmp); 
  }, []);

  useEffect(() => {
    callback(chooseValue, elementKey);
  }, [chooseValue]);
  
  const setVisibleByCode = (parentCode) => {
    let tmp = [];
    okpd2List.map((item) => {
      tmp[item.code] = visible[item.code];
    });

    okpd2List.map((item) => {
      item.parent_code === parentCode 
        ? tmp[item.code] = !visible[item.code]
        : '';
    })
    setVisible(tmp); 
  };

  return (
    <div className='okpd2'>
      {
        okpd2FormatedList.map((p, ip) =>
          <div className={`okpd2__shift-item${!visible[p.code] ? '-hidden' : ''}`} key={p.code}>
            <a className='okpd2__shift-item__link' onClick={() => setVisibleByCode(p.code)}>{p.code} — {p.name}</a>
            {p.children.map((p2, ip2) =>
              <div className={`okpd2__shift-item${!visible[p2.code] ? '-hidden' : ''}`} key={p2.code}>
                <a className='okpd2__shift-item__link' onClick={() => setVisibleByCode(p2.code)}>{p2.code} — {p2.name}</a>
                {p2.children.map((p3, ip3) => 
                  <div className={`okpd2__shift-item${!visible[p3.code] ? '-hidden' : ''}`} key={p3.code}>
                    <a className='okpd2__shift-item__link' onClick={() => setVisibleByCode(p3.code)}>{p3.code} — {p3.name}</a>
                  {p3.children.map((p4, ip4) =>
                    <div className={`okpd2__shift-item${!visible[p4.code] ? '-hidden' : ''}`} key={p4.code}>
                      <a className='okpd2__shift-item__link' onClick={() => setVisibleByCode(p4.code)}>{p4.code} — {p4.name}</a>
                      {p4.children.map((p5, ip5) =>
                        <div className={`okpd2__shift-item${!visible[p5.code] ? '-hidden' : ''}`} key={p5.code}>
                          <a className='okpd2__shift-item__link' onClick={() => setVisibleByCode(p5.code)}>{p5.code} — {p5.name}</a>
                            {p5.children.map((p6, ip6) => 
                              <div className={`okpd2__shift-item${!visible[p6.code] ? '-hidden' : ''}`} key={p6.code}>
                                <a className='okpd2__shift-item__link' onClick={() => setVisibleByCode(p6.code)}>{p6.code} — {p6.name}</a>
                                {p6.children.map((p7, ip7) => 
                                  <div className={`okpd2__shift-item${!visible[p7.code] ? '-hidden' : ''}`} key={p7.code}>
                                    <a className={`okpd2__shift-item__link${chooseValue === p7.code ? '-choosed' : ''}`} onClick={() => {p7.children.length ? setVisibleByCode(p7.code) : changeChooseValue(p7.code)}}>{p7.code} — {p7.name}</a> 
                                    {p7.children.map((p8, ip8) => 
                                      <div className={`okpd2__shift-item${!visible[p8.code] ? '-hidden' : ''}`} key={p8.code}>
                                        <a className={`okpd2__shift-item__link${chooseValue === p8.code ? '-choosed' : ''}`} onClick={() => changeChooseValue(p8.code)}>{p8.code} — {p8.name}</a>  
                                      </div>
                                    )} 
                                  </div>
                                )}
                              </div>
                            )}
                        </div>
                      )}
                    </div>
                  )}
                  </div>
                )}
              </div>
            )}
          </div>
        )
      }
    </div>
  );


    // const form = () => {
  //   let arr = [];
  //   //категория
  //   okpd2List.map((item) => {
  //     item.parent_code === ''
  //       ? arr.push(item)
  //       : ''
  //   });

  //   //класс
  //   arr.map(i => i.children = []);

  //   okpd2List.map((c, ic) => {
  //     arr.map((p, ip) => {
  //       c.parent_code === p.code 
  //         ? arr[ip].children.push(c)
  //         : ''
  //     });
  //   });

  //   //подкласс
  //   arr.map(i => {
  //     i.children.map(i2 => i2.children = []);
  //   });


  //   arr.map((p, ip) => {
  //     p.children.map((p2, ip2) => {
  //       okpd2List.map((c, ic) => {
  //         c.parent_code === p2.code 
  //           ? arr[ip].children[ip2].children.push(c)
  //           : '';
  //       });
  //     });
  //   });

  //   //группа
    
  //   arr.map(i => {
  //     i.children.map(i2 => {
  //       i2.children.map(i3 => i3.children = []);
  //     });
  //   });

  //   arr.map((p, ip) => {
  //     p.children.map((p2, ip2) => {
  //       p2.children.map((p3, ip3) => {
  //         okpd2List.map((c, ic) => {
  //           c.parent_code === p3.code 
  //             ? arr[ip].children[ip2].children[ip3].children.push(c)
  //             : '';
  //         });
  //      });
  //     });
  //   });

  //   //подгруппа

  //   arr.map(i => {
  //     i.children.map(i2 => {
  //       i2.children.map(i3 => {
  //         i3.children.map(i4 => i4.children = []);
  //       });
  //     });
  //   });

  //   arr.map((p, ip) => {
  //     p.children.map((p2, ip2) => {
  //       p2.children.map((p3, ip3) => {
  //         p3.children.map((p4, ip4) => {
  //           okpd2List.map((c, ic) => {
  //             c.parent_code === p4.code 
  //               ? arr[ip].children[ip2].children[ip3].children[ip4].children.push(c)
  //               : '';
  //           });
  //         });
  //      });
  //     });
  //   });

  //   //вид
  //   arr.map(i => {
  //     i.children.map(i2 => {
  //       i2.children.map(i3 => {
  //         i3.children.map(i4 => {
  //           i4.children.map(i5 => i5.children = []);
  //         });
  //       });
  //     });
  //   });

  //   arr.map((p, ip) => {
  //     p.children.map((p2, ip2) => {
  //       p2.children.map((p3, ip3) => {
  //         p3.children.map((p4, ip4) => {
  //           p4.children.map((p5, ip5) => {
  //             okpd2List.map((c, ic) => {
  //               c.parent_code === p5.code 
  //                 ? arr[ip].children[ip2].children[ip3].children[ip4].children[ip5].children.push(c)
  //                 : '';
  //             });
  //           });
  //         });
  //      });
  //     });
  //   });

  //   //категория
  //   arr.map(i => {
  //     i.children.map(i2 => {
  //       i2.children.map(i3 => {
  //         i3.children.map(i4 => {
  //           i4.children.map(i5 => {
  //             i5.children.map(i6 => i6.children = [])
  //           });
  //         });
  //       });
  //     });
  //   });

  //   arr.map((p, ip) => {
  //     p.children.map((p2, ip2) => {
  //       p2.children.map((p3, ip3) => {
  //         p3.children.map((p4, ip4) => {
  //           p4.children.map((p5, ip5) => {
  //             p5.children.map((p6, ip6) => {
  //               okpd2List.map((c, ic) => {
  //                 c.parent_code === p6.code 
  //                   ? arr[ip].children[ip2].children[ip3].children[ip4].children[ip5].children[ip6].children.push(c)
  //                   : '';
  //               });
  //             });
  //           });
  //         });
  //      });
  //     });
  //   });

  //   //подкатегория
  //   arr.map(i => {
  //     i.children.map(i2 => {
  //       i2.children.map(i3 => {
  //         i3.children.map(i4 => {
  //           i4.children.map(i5 => {
  //             i5.children.map(i6 => {
  //               i6.children.map(i7 => i7.children = []);
  //             })
  //           });
  //         });
  //       });
  //     });
  //   });

  //   arr.map((p, ip) => {
  //     p.children.map((p2, ip2) => {
  //       p2.children.map((p3, ip3) => {
  //         p3.children.map((p4, ip4) => {
  //           p4.children.map((p5, ip5) => {
  //             p5.children.map((p6, ip6) => {
  //               p6.children.map((p7, ip7) => {
  //                 okpd2List.map((c, ic) => {
  //                   c.parent_code === p7.code 
  //                     ? arr[ip].children[ip2].children[ip3].children[ip4].children[ip5].children[ip6].children[ip7].children.push(c)s
  //                     : '';
  //                 });
  //               });
  //             });
  //           });
  //         });
  //      });
  //     });
  //   });
  //   return arr;
  // }
}