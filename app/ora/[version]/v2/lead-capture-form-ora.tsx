"use client";

import { Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { PHONE_DDI_OPTIONS } from "@/lib/config/phone-ddi-options";
import { cn } from "@/lib/utils";
import {
	leadCaptureFormSchema,
	LeadCaptureFormValues,
} from "@/app/modules/lead-capture/lead-capture.model";

export interface LeadCaptureSubmitData extends LeadCaptureFormValues {
	normalizedPhone: string;
}

export interface LeadCaptureFormProps {
	formId?: string;
	formName?: string;
	className?: string;
	emailInputClassName: string;
	nameInputClassName: string;
	ddiSelectClassName: string;
	phoneInputClassName: string;
	buttonClassName: string;
	defaultValues?: Partial<LeadCaptureFormValues>;
	submitLabel?: string;
	submittingLabel?: string;
	submitError?: string | null;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
}

function formatPhoneByDdi(value: string, ddi: string): string {
	const numericValue = value.replace(/\D/g, "");

	if (ddi === "+55") {
		if (numericValue.length <= 2) {
			return numericValue;
		}
		if (numericValue.length <= 7) {
			return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
		}
		return `(${numericValue.slice(0, 2)}) ${numericValue.slice(
			2,
			7
		)}-${numericValue.slice(7, 11)}`;
	}

	if (numericValue.length > 3 && numericValue.length <= 7) {
		return `${numericValue.slice(0, 3)}-${numericValue.slice(3)}`;
	}

	if (numericValue.length > 7) {
		return `${numericValue.slice(0, 3)}-${numericValue.slice(
			3,
			7
		)}-${numericValue.slice(7)}`;
	}

	return numericValue;
}

export function normalizePhone(data: LeadCaptureFormValues): string {
	return `${data.ddi}${data.whatsapp.replace(/\D/g, "")}`;
}

export function LeadCaptureForm({
	formId = "cadastro",
	formName,
	className,
	emailInputClassName,
	nameInputClassName,
	ddiSelectClassName,
	phoneInputClassName,
	buttonClassName,
	defaultValues,
	submitLabel = "QUERO DESTRAVAR MEU RELACIONAMENTO",
	submittingLabel = "ENVIANDO...",
	submitError,
	onSubmit,
}: LeadCaptureFormProps) {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm<LeadCaptureFormValues>({
		resolver: zodResolver(leadCaptureFormSchema),
		defaultValues: {
			name: "",
			email: "",
			ddi: "+55",
			whatsapp: "",
			...defaultValues,
		},
	});

	const ddi = watch("ddi");

	const submitHandler: SubmitHandler<LeadCaptureFormValues> = async (
		values
	) => {
		await onSubmit({
			...values,
			normalizedPhone: normalizePhone(values),
		});
	};

	return (
		<form
			id={formId}
			name={formName}
			className={cn("w-full", className)}
			onSubmit={handleSubmit(submitHandler)}
		>
			<div className="w-full md:w-[521px] flex flex-col md:flex-row gap-[12px] md:gap-[24px]">
				<div className="w-full md:w-[248.5px] shrink-0">
					<Input
						id="form-field-name"
						placeholder="Seu nome"
						className={nameInputClassName}
						style={{ fontFamily: "Arial, sans-serif" }}
						{...register("name")}
					/>
					{errors.name ? (
						<p className="mt-1 text-sm !text-red-300">
							{errors.name.message}
						</p>
					) : null}
				</div>

				<div className="relative w-full md:w-[248.5px] shrink-0">

					<div className="flex w-full md:w-[248.5px] h-[52px] border-b-[1.5px] border-[#C0964B] bg-[#FFFFFF]">
						<select
							className={ddiSelectClassName}
							style={{ fontFamily: "Arial, sans-serif" }}
							{...register("ddi")}
						>
							{PHONE_DDI_OPTIONS.map((option) => (
								<option key={option.value} value={option.value}>
									{option.label}
								</option>
							))}
						</select>

						<Input
							type="tel"
							placeholder="Seu WhatsApp"
							id="form-field-telefone"
							className={phoneInputClassName}
							style={{ fontFamily: "Arial, sans-serif" }}
							{...register("whatsapp", {
								onChange: (event) => {
									const formatted = formatPhoneByDdi(
										event.target.value,
										ddi
									);
									setValue("whatsapp", formatted, {
										shouldValidate: true,
									});
								},
							})}
						/>
					</div>

					{errors.ddi ? (
						<p className="mt-1 text-sm !text-red-300">
							{errors.ddi.message}
						</p>
					) : null}
					{errors.whatsapp ? (
						<p className="mt-1 text-sm !text-red-300">
							{errors.whatsapp.message}
						</p>
					) : null}
				</div>
			</div>

			<div className="mt-[12px] w-full md:w-[521px]">
				<Input
					id="form-field-email"
					placeholder="Seu melhor e-mail"
					className={emailInputClassName}
					style={{ fontFamily: "Arial, sans-serif" }}
					{...register("email")}
				/>
				{errors.email ? (
					<p className="mt-1 text-sm !text-red-300">
						{errors.email.message}
					</p>
				) : null}
			</div>

			<button
				type="submit"
				className={buttonClassName}
				disabled={isSubmitting}
			>
				<span>{isSubmitting ? submittingLabel : submitLabel}</span>
			</button>

			{submitError ? (
				<p className="text-sm text-red-300">{submitError}</p>
			) : null}
		</form>
	);
}