import { z } from 'zod';

// 验证美国电话号码格式
const phoneRegex =
	/^(\+1|1)?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;

// 加州地址验证 - 检查地址中是否包含加州信息
const californiaKeywords = ['CA', 'California', 'calif', 'ca', 'california'];

// 加州主要城市名称 - 用于宽松验证
const californiaCities = [
	'los angeles',
	'san francisco',
	'san diego',
	'sacramento',
	'san jose',
	'oakland',
	'berkeley',
	'fresno',
	'long beach',
	'irvine',
	'santa monica',
	'palo alto',
	'mountain view',
	'sunnyvale',
	'santa clara',
	'san mateo',
	'redwood',
	'concord',
	'pleasanton',
	'walnut creek',
	'fremont',
	'hayward',
	'cupertino',
	'menlo park',
	'richmond',
	'santa rosa',
	'stockton',
	'bakersfield',
	'anaheim',
	'riverside',
	'pasadena',
	'burbank',
	'glendale',
	'huntington beach',
];

// 定义表单数据的类型
interface FormData {
	name: string;
	email: string;
	phone: string;
	service: string;
	address: string;
	message: string;
}

// 创建验证schema
const contactFormSchema = z.object({
	name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
	email: z.string().email({ message: 'Invalid email address' }),
	phone: z
		.string()
		.regex(phoneRegex, { message: 'Please enter a valid US phone number' })
		.optional()
		.or(z.literal('')),
	service: z.string({ message: 'Please select a service' }),
	address: z
		.string()
		.refine(
			(address) => {
				if (!address || address.trim() === '') return true;

				// 忽略逗号，转小写，清理额外空格
				const normalizedAddress = address
					.toLowerCase()
					.replace(/,/g, ' ')
					.replace(/\s+/g, ' ')
					.trim();

				// 检查是否包含加州关键词
				const hasCaliforniaKeyword = californiaKeywords.some((keyword) =>
					normalizedAddress.includes(keyword.toLowerCase())
				);

				// 检查是否包含加州城市名称
				const hasCaliforniaCity = californiaCities.some((city) =>
					normalizedAddress.includes(city.toLowerCase())
				);

				// 只要满足任一条件即可通过验证
				return hasCaliforniaKeyword || hasCaliforniaCity;
			},
			{
				message:
					'Address should be in California. Example: 123 Main St, San Jose',
			}
		)
		.optional()
		.or(z.literal('')),
	message: z.string().optional(),
});

// 接口请求处理函数类型
interface APIContext {
	request: Request;
}

// 接口响应类型
interface APIResponse {
	status: number;
	body?: string;
	headers?: Record<string, string>;
}

export async function post({ request }: APIContext): Promise<APIResponse> {
	try {
		// 获取表单数据
		const formData = await request.formData();
		const formValues: FormData = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			phone: (formData.get('phone') as string) || '',
			service: formData.get('service') as string,
			address: (formData.get('address') as string) || '',
			message: (formData.get('message') as string) || '',
		};

		// 验证表单数据
		const validatedData = contactFormSchema.safeParse(formValues);

		// 如果验证失败，返回错误
		if (!validatedData.success) {
			return {
				status: 400,
				body: JSON.stringify({
					success: false,
					errors: validatedData.error.format(),
				}),
			};
		}

		// 验证成功，继续处理
		console.log('Form submission received:', validatedData.data);

		// 可以在这里添加与CRM或邮件服务的集成

		// 重定向到感谢页面
		return {
			status: 303, // See Other
			headers: {
				Location: '/thank-you',
			},
		};
	} catch (error) {
		console.error('Form submission error:', error);

		return {
			status: 500,
			body: JSON.stringify({
				success: false,
				message: 'Internal server error',
			}),
		};
	}
}
