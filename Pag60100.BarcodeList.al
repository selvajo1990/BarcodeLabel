page 60100 "Barcode List"
{
    PageType = List;
    ApplicationArea = All;
    UsageCategory = Administration;
    SourceTable = "Reason Code";
    layout
    {
        area(Content)
        {
            repeater(General)
            {
                field(Code; Rec.Code)
                {
                    ToolTip = 'Specifies the value of the Code';
                    ApplicationArea = All;
                }
                field(Description; Rec.Description)
                {
                    ToolTip = 'Specifies the value of the Description';
                    ApplicationArea = All;
                }
            }
        }
        area(FactBoxes)
        {
            part("Barcode Label"; "Barcode Label")
            {
                ApplicationArea = All;
                SubPageLink = Code = field(Code);
            }
        }
    }
}