SELECT * FROM exam_module05.package;
use exam_module05;
INSERT INTO `exam_module05`.`package` (`id`, `code`, `date_end`, `date_import`, `date_start`, `quantity`, `product_id`) VALUES ('1', 'LH-1111', '2021-10-09', '2020-12-28', '2020-09-10', '2', '1');
INSERT INTO `exam_module05`.`package` (`id`, `code`, `date_end`, `date_import`, `date_start`, `quantity`, `product_id`) VALUES ('2', 'LH-2222', '2021-10-15', '2020-11-02', '2020-10-15', '3', '2');
INSERT INTO `exam_module05`.`package` (`id`, `code`, `date_end`, `date_import`, `date_start`, `quantity`, `product_id`) VALUES ('3', 'LH-3333', '2021-09-10', '2020-12-01', '2020-09-14', '4', '3');
INSERT INTO `exam_module05`.`package` (`id`, `code`, `date_end`, `date_import`, `date_start`, `quantity`, `product_id`) VALUES ('4', 'LH-4444', '2021-10-09', '2020-12-28', '2020-09-10', '2', '1');

SELECT * FROM exam_module05.product;
INSERT INTO `exam_module05`.`product` (`id`, `currency`, `factory`, `name`, `price`) VALUES ('1', 'thùng', 'A', 'Sting', '1000');
INSERT INTO `exam_module05`.`product` (`id`, `currency`, `factory`, `name`, `price`) VALUES ('2', 'thùng', 'B', 'Oshi', '2000');
INSERT INTO `exam_module05`.`product` (`id`, `currency`, `factory`, `name`, `price`) VALUES ('3', 'thùng', 'C', 'Tiger', '3000');